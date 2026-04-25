/* ===== ROUTE PLANNER ===== */
(function () {
  'use strict';

  const API_KEY_STORAGE = 'dnb_openrouter_api_key';
  const LEGACY_API_KEY_STORAGE = 'dnb_nvidia_api_key';

  // A palette of visually distinct colours, one per day
  const DAY_COLORS = [
    '#e85d3a', '#4f98a3', '#d4a04a', '#7aa856',
    '#9b59b6', '#e74c3c', '#2ecc71', '#3498db',
    '#f39c12', '#1abc9c', '#e67e22', '#8e44ad'
  ];

  // DOM refs (panel elements are top-level in app.js but accessible via ID)
  const overlay    = document.getElementById('routePlannerModal');
  const openBtn    = document.getElementById('openRoutePlanner');
  const closeBtn   = document.getElementById('closePlannerModal');
  const form       = document.getElementById('plannerForm');
  const submitBtn  = document.getElementById('plannerSubmit');
  const panel      = document.getElementById('roadPanel');
  const panelTitle = document.getElementById('panelTitle');
  const panelBody  = document.getElementById('panelBody');
  const panelClose = document.getElementById('panelClose');

  let plannerLayer = null;   // L.layerGroup holding all planner map layers
  let hasItinerary = false;  // whether a planner result is currently shown
  let lastOpenRouterRequest = ''; // last redacted OpenRouter request payload

  /* ---- Modal open / close ---- */

  openBtn.addEventListener('click', () => {
    const saved = localStorage.getItem(API_KEY_STORAGE) || localStorage.getItem(LEGACY_API_KEY_STORAGE) || '';
    document.getElementById('plannerApiKey').value = saved;
    hideFormError();
    overlay.classList.add('open');
  });

  const closeModal = () => overlay.classList.remove('open');
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ---- Data digest helpers ---- */

  function roadsDigest() {
    return ROADS_DATA.map(r =>
      `${r.id}|${r.name}|${r.region}|${r.difficulty}|${r.distance}|${r.lat.toFixed(3)},${r.lng.toFixed(3)}`
    ).join('\n');
  }

  function poisDigest(cats) {
    if (!cats.length) return '';
    const lines = [];
    cats.forEach(cat => {
      (POIS_DATA[cat]?.pois || []).forEach(p => {
        lines.push(`${p.name}|${cat}|${p.lat.toFixed(3)},${p.lng.toFixed(3)}`);
      });
    });
    return lines.join('\n');
  }

  /* ---- Build AI messages ---- */

  function buildMessages(f) {
    const system = `You are an expert UK driving tour planner specialising in sports car and enthusiast driving routes across England, Scotland and Wales.
You MUST respond with ONLY valid JSON — no markdown fences, no explanation, just the raw JSON object.

Required schema (do not add extra fields):
{
  "title": string,
  "summary": string,
  "totalMiles": string,
  "days": [
    {
      "day": number,
      "title": string,
      "description": string,
      "overnight": string,
      "estimatedDrivingHours": number,
      "roadIds": number[],
      "poiNames": string[],
      "centerLatLng": [lat_number, lng_number]
    }
  ]
}

Rules:
- roadIds must reference IDs from the provided roads list only
- poiNames must exactly match names from the provided POIs list
- estimatedDrivingHours must not exceed ${f.maxHours}
- Assign 1–4 roads per day, grouped geographically so driving flows naturally
- centerLatLng is the geographic midpoint of that day's route as [lat, lng]
- Distribute the ${f.numDays} days evenly across the journey from ${f.startLocation} to ${f.endLocation}`;

    const poiBlock = f.poiTypes.length
      ? `\nPOIs available (name|category|lat,lng):\n${poisDigest(f.poiTypes)}`
      : '';

    const user = `Plan a ${f.numDays}-day UK driving tour with the following requirements:
Start: ${f.startLocation}
End:   ${f.endLocation}
${f.stopTowns ? `Preferred towns to pass through: ${f.stopTowns}` : ''}
Maximum driving per day: ${f.maxHours} hours
POI interests: ${f.poiTypes.join(', ') || 'none specified'}

Roads available (id|name|region|difficulty|distance|lat,lng):
${roadsDigest()}${poiBlock}

Create an engaging ${f.numDays}-day itinerary that makes full use of the best driving roads on the route between ${f.startLocation} and ${f.endLocation}. Prioritise roads that are geographically on or near the route. Include interesting overnight towns.`;

    return [
      { role: 'system', content: system },
      { role: 'user',   content: user }
    ];
  }

  /* ---- OpenRouter API call ---- */

  async function callOpenRouter(apiKey, messages, modelOverride) {
    const endpoint = 'https://openrouter.ai/api/v1/chat/completions';
    // Prefer the user's explicit choice; otherwise try a broad set so at
    // least one passes even with strict data-policy / guardrail settings.
    const modelsToTry = modelOverride ? [modelOverride] : [
      'anthropic/claude-3-haiku',
      'google/gemini-2.0-flash-001',
      'openai/gpt-4o-mini',
      'meta-llama/llama-3.1-8b-instruct',
      'mistralai/mistral-7b-instruct'
    ];
    let lastError = '';

    for (const model of modelsToTry) {
      const requestPreview = {
        url: endpoint,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer [REDACTED]',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'DNB Drive'
        },
        body: {
          model,
          messages,
          max_tokens: 2000,
          temperature: 0.6
        }
      };
      console.info('[DNB/OpenRouter] Request preview', requestPreview);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'DNB Drive'
        },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: 2000,
          temperature: 0.6
        })
      });

      if (res.ok) {
        const data = await res.json();
        return data.choices[0].message.content;
      }

      const txt = await res.text();
      lastError = `OpenRouter API ${res.status}: ${txt.slice(0, 300)}`;

      // If blocked by privacy/guardrail policy, try next model first.
      if (res.status === 404 && /guardrail restrictions|data policy/i.test(txt)) {
        continue;
      }

      throw new Error(lastError);
    }

    throw new Error(
      modelOverride
        ? `The model "${modelOverride}" is blocked by your OpenRouter privacy settings. ` +
          'Try a different model or update your settings at https://openrouter.ai/settings/privacy'
        : 'All fallback models were blocked by your OpenRouter privacy settings. ' +
          'Enter a specific model that works with your account, or update your privacy settings at ' +
          'https://openrouter.ai/settings/privacy'
    );
  }

  /* ---- Parse AI response ---- */

  function parseItinerary(raw) {
    // Strip markdown code fences if the model wraps output
    const clean = raw.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();
    const match = clean.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('No JSON object found in AI response.');
    return JSON.parse(match[0]);
  }

  /* ---- Map layer management ---- */

  function clearPlannerLayer() {
    if (plannerLayer) {
      map.removeLayer(plannerLayer);
      plannerLayer = null;
    }
  }

  function drawItineraryOnMap(itin) {
    clearPlannerLayer();
    // Also clear any existing single-road route drawn by app.js
    if (typeof clearRoute === 'function') clearRoute();

    plannerLayer = L.layerGroup().addTo(map);
    const allPts = [];

    itin.days.forEach((day, i) => {
      const color = DAY_COLORS[i % DAY_COLORS.length];

      // Draw each road for this day as a polyline
      (day.roadIds || []).forEach(rid => {
        const road = ROADS_DATA.find(r => r.id === rid);
        if (!road?.waypoints?.length) return;
        const pts = road.waypoints.map(([lat, lng]) => [lat, lng]);
        pts.forEach(p => allPts.push(p));
        // glow + main line, same pattern as app.js
        L.polyline(pts, { color, weight: 14, opacity: 0.15, lineCap: 'round', lineJoin: 'round' }).addTo(plannerLayer);
        L.polyline(pts, { color, weight: 4,  opacity: 0.9,  lineCap: 'round', lineJoin: 'round' }).addTo(plannerLayer);
      });

      // Day marker at overnight stop
      if (day.centerLatLng) {
        allPts.push(day.centerLatLng);
        L.marker(day.centerLatLng, {
          icon: L.divIcon({
            className: '',
            html: `<div class="day-marker" style="background:${color}">D${day.day}</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
          }),
          zIndexOffset: 500
        })
          .bindPopup(`<b>Day ${day.day}</b><br>${day.overnight}`)
          .addTo(plannerLayer);
      }
    });

    if (allPts.length) {
      map.fitBounds(L.latLngBounds(allPts).pad(0.1), { maxZoom: 10, animate: true, duration: 0.8 });
    }
  }

  /* ---- Itinerary panel rendering ---- */

  function renderItinerary(itin) {
    hasItinerary = true;
    panel.classList.remove('collapsed');
    panelTitle.textContent = itin.title;

    panelBody.innerHTML = `
      <p class="itin-summary">${itin.summary}</p>
      <div class="itin-meta-row">
        <span class="itin-meta-pill">${itin.days.length} day${itin.days.length !== 1 ? 's' : ''}</span>
        ${itin.totalMiles ? `<span class="itin-meta-pill">${itin.totalMiles}</span>` : ''}
      </div>
      ${itin.days.map((day, i) => renderDay(day, i)).join('')}
    `;

    // Re-run lucide icon rendering for clock / moon icons inside panel
    if (typeof lucide !== 'undefined') lucide.createIcons();
    requestAnimationFrame(() => map.invalidateSize());
  }

  function renderDay(day, idx) {
    const color = DAY_COLORS[idx % DAY_COLORS.length];
    const roads = (day.roadIds || [])
      .map(id => ROADS_DATA.find(r => r.id === id))
      .filter(Boolean);

    return `
      <div class="itin-day">
        <div class="itin-day-header" style="--day-clr:${color}; border-left-color:${color}">
          <span class="itin-day-badge" style="background:${color}">Day ${day.day}</span>
          <span class="itin-day-title">${day.title}</span>
        </div>
        <p class="itin-day-desc">${day.description}</p>
        <div class="itin-day-meta">
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ~${day.estimatedDrivingHours}h driving
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ${day.overnight}
          </span>
        </div>
        ${roads.length ? `
          <div class="itin-section">
            <div class="itin-section-label">Driving Roads</div>
            ${roads.map(r => `
              <button class="itin-road-btn" onclick="showRoadPanel(${r.id})">
                <span class="itin-dot" style="background:${color}"></span>
                <span class="itin-road-name">${r.name}</span>
                <span class="diff-badge ${r.difficulty}">${r.difficulty}</span>
              </button>
            `).join('')}
          </div>
        ` : ''}
        ${day.poiNames?.length ? `
          <div class="itin-section">
            <div class="itin-section-label">Places to Visit</div>
            ${day.poiNames.map(name => `
              <div class="itin-poi-item">
                <span class="itin-dot" style="background:var(--color-text-muted)"></span>
                <span>${name}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  /* ---- Form error helpers ---- */

  function showFormError(msg) {
    const el = document.getElementById('plannerFormError');
    if (!el) return;
    el.textContent = msg;
    el.style.display = 'block';
  }

  function hideFormError() {
    const el = document.getElementById('plannerFormError');
    if (el) el.style.display = 'none';
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;'
    }[c]));
  }

  /* ---- Form submit ---- */

  form.addEventListener('submit', async e => {
    e.preventDefault();
    hideFormError();

    const apiKey = document.getElementById('plannerApiKey').value.trim();
    const startLocation = document.getElementById('plannerStart').value.trim();
    const endLocation   = document.getElementById('plannerEnd').value.trim();

    if (!startLocation || !endLocation) {
      showFormError('Please enter both a starting and ending location.');
      return;
    }
    if (!apiKey) {
      showFormError('Please enter your OpenRouter API key.');
      return;
    }

    // Persist key for convenience
    localStorage.setItem(API_KEY_STORAGE, apiKey);

    const formData = {
      startLocation,
      endLocation,
      stopTowns: document.getElementById('plannerStops').value.trim(),
      poiTypes:  [...document.querySelectorAll('.planner-poi-cb:checked')].map(cb => cb.value),
      numDays:   parseInt(document.getElementById('plannerDays').value, 10),
      maxHours:  parseFloat(document.getElementById('plannerMaxHours').value)
    };

    // Close modal, scroll to map, show loading state
    closeModal();
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });

    panel.classList.remove('collapsed');
    panelTitle.textContent = 'Planning Your Route…';
    panelBody.innerHTML = `
      <div class="planner-loading">
        <div class="planner-spinner"></div>
        <p>AI is crafting your perfect drive…</p>
        <p class="planner-loading-sub">This may take 15–30 seconds</p>
      </div>
    `;
    requestAnimationFrame(() => map.invalidateSize());

    submitBtn.disabled = true;
    submitBtn.textContent = 'Planning…';

    try {
      const modelOverride = document.getElementById('plannerModel').value.trim() || null;
      const messages  = buildMessages(formData);
      const rawOutput = await callOpenRouter(apiKey, messages, modelOverride);
      const itin      = parseItinerary(rawOutput);

      drawItineraryOnMap(itin);
      renderItinerary(itin);
    } catch (err) {
      hasItinerary = false;
      panel.classList.remove('collapsed');
      panelTitle.textContent = 'Planning Failed';
      panelBody.innerHTML = `
        <div class="planner-error">
          <p>Could not generate your route.</p>
          <p class="planner-error-detail">${err.message}</p>
          <button class="planner-btn-retry" onclick="document.getElementById('openRoutePlanner').click()">
            Try Again
          </button>
        </div>
      `;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Plan My Route';
    }
  });

  /* ---- Clear planner layers when panel closes ---- */
  panelClose.addEventListener('click', () => {
    clearPlannerLayer();
    hasItinerary = false;
  });

})();
