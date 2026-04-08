/* ===== THEME TOGGLE ===== */
(function() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  updateToggleIcon();

  toggle && toggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    updateToggleIcon();
    // Update map tiles if map exists
    if (window.currentTileLayer && window.map) {
      window.map.removeLayer(window.currentTileLayer);
      window.currentTileLayer = createTileLayer();
      window.map.addLayer(window.currentTileLayer);
    }
  });

  function updateToggleIcon() {
    if (!toggle) return;
    toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    toggle.innerHTML = theme === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

/* ===== LUCIDE ICONS ===== */
lucide.createIcons();

/* ===== MAP SETUP ===== */
function createTileLayer() {
  const theme = document.documentElement.getAttribute('data-theme');
  const isDark = theme === 'dark' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) {
    return L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 18
    });
  } else {
    return L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 18
    });
  }
}

const map = L.map('map', {
  center: [54.5, -3.5],
  zoom: 6,
  zoomControl: true,
  scrollWheelZoom: false
});

window.map = map;
window.currentTileLayer = createTileLayer();
window.currentTileLayer.addTo(map);

/* ===== SCROLL WHEEL ZOOM GUARD ===== */
// Only allow scroll-zoom after the user clicks the map;
// disable again when the mouse leaves so page scrolling works normally.
(function() {
  const mapEl = document.getElementById('map');
  let hint = null;
  let hintTimer = null;

  function showHint() {
    if (!hint) {
      hint = document.createElement('div');
      hint.className = 'map-scroll-hint';
      mapEl.appendChild(hint);
    }
    hint.classList.add('visible');
    clearTimeout(hintTimer);
    hintTimer = setTimeout(() => hint.classList.remove('visible'), 1800);
  }

  mapEl.addEventListener('wheel', (e) => {
    if (!map.scrollWheelZoom._enabled) { e.stopPropagation(); showHint(); }
  }, { passive: false, capture: true });

  map.on('focus', () => { map.scrollWheelZoom.enable(); if (hint) hint.classList.remove('visible'); });
  mapEl.addEventListener('click', () => { map.scrollWheelZoom.enable(); if (hint) hint.classList.remove('visible'); });
  mapEl.addEventListener('mouseleave', () => { map.scrollWheelZoom.disable(); });
})();

// Collapse panel by default on mobile
if (window.innerWidth <= 900) {
  document.getElementById('roadPanel').classList.add('collapsed');
}

/* ===== MARKERS ===== */
const markers = [];
const markerGroup = L.featureGroup();

function getCountryClass(region) {
  return region.toLowerCase();
}

function createMarkerIcon(road) {
  const countryClass = getCountryClass(road.region);
  return L.divIcon({
    className: '',
    html: `<div class="custom-marker ${countryClass}">${road.id}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -20]
  });
}

ROADS_DATA.forEach(road => {
  const marker = L.marker([road.lat, road.lng], {
    icon: createMarkerIcon(road)
  });

  const popupContent = `
    <div class="popup-name">${road.name}</div>
    <div class="popup-region">${road.county}, ${road.region}</div>
    <span class="diff-badge ${road.difficulty}">${road.difficulty}</span>
    <div class="popup-link" onclick="showRoadPanel(${road.id})">View details →</div>
  `;

  marker.bindPopup(popupContent, { maxWidth: 250, closeButton: true });
  
  marker.on('click', () => {
    showRoadPanel(road.id);
  });

  marker.roadData = road;
  markers.push(marker);
  markerGroup.addLayer(marker);
});

markerGroup.addTo(map);

/* ===== ROUTE HIGHLIGHTING ===== */
let currentRouteLayer = null;
let activeRouteId = null;
let routeAbortController = null;

function resolveColor(cssVar) {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
}

function clearRoute() {
  if (routeAbortController) { routeAbortController.abort(); routeAbortController = null; }
  if (currentRouteLayer) { map.removeLayer(currentRouteLayer); currentRouteLayer = null; }
  activeRouteId = null;
}

function drawRouteLayers(geojsonOrLatlngs, color, isDashed) {
  const opts = (weight, opacity, dash) => ({
    color, weight, opacity, lineCap: 'round', lineJoin: 'round',
    ...(dash ? { dashArray: '10 8' } : {})
  });
  const mk = (g) => isDashed
    ? L.polyline(g, opts(4, 0.85, true))
    : L.geoJSON(g, { style: opts(4, 0.9, false) });
  const mkGlow = (g) => isDashed
    ? L.polyline(g, opts(14, 0.18, false))
    : L.geoJSON(g, { style: opts(14, 0.18, false) });

  const glow = mkGlow(geojsonOrLatlngs);
  const line = mk(geojsonOrLatlngs);
  const group = L.layerGroup([glow, line]).addTo(map);
  // push route behind markers
  glow.getPane && glow.setZIndex && glow.setZIndex(300);
  return group;
}

async function drawRoute(road) {
  clearRoute();
  if (!road.waypoints || road.waypoints.length < 2) {
    map.flyTo([road.lat, road.lng], 10, { duration: 0.8 });
    return;
  }

  activeRouteId = road.id;
  const color = resolveColor(`--color-${road.region.toLowerCase()}`);

  // Fly immediately to center while we wait for route
  map.flyTo([road.lat, road.lng], 9, { duration: 0.6 });

  routeAbortController = new AbortController();
  const signal = routeAbortController.signal;

  // OSRM expects lng,lat order
  const coords = road.waypoints.map(([lat, lng]) => `${lng.toFixed(5)},${lat.toFixed(5)}`).join(';');
  const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`;

  try {
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (activeRouteId !== road.id) return; // user moved on

    if (data.routes && data.routes[0]) {
      currentRouteLayer = drawRouteLayers(data.routes[0].geometry, color, false);
      map.fitBounds(currentRouteLayer.getLayers()[0].getBounds().pad(0.15), {
        animate: true, maxZoom: 13, duration: 0.6
      });
    } else {
      useFallback(road, color);
    }
  } catch (e) {
    if (e.name === 'AbortError') return;
    if (activeRouteId === road.id) useFallback(road, color);
  }
}

function useFallback(road, color) {
  const latlngs = road.waypoints.map(([lat, lng]) => [lat, lng]);
  currentRouteLayer = drawRouteLayers(latlngs, color, true);
  const bounds = L.latLngBounds(latlngs);
  map.fitBounds(bounds.pad(0.25), { animate: true, maxZoom: 13, duration: 0.6 });
}

/* ===== ROAD PANEL ===== */
const panel = document.getElementById('roadPanel');
const panelTitle = document.getElementById('panelTitle');
const panelBody = document.getElementById('panelBody');
const panelClose = document.getElementById('panelClose');

function showRoadPanel(roadId) {
  const road = ROADS_DATA.find(r => r.id === roadId);
  if (!road) return;

  panel.classList.remove('collapsed');
  panelTitle.textContent = road.name;
  drawRoute(road);

  const countryColor = `var(--color-${road.region.toLowerCase()})`;

  const imagesHTML = road.images && road.images.length
    ? `<div class="panel-images">
        <div class="image-gallery">
          ${road.images.map(img => `
            <figure class="gallery-item">
              <img class="gallery-img" src="${img.url}" alt="${img.caption}" loading="lazy">
              <figcaption class="gallery-caption">${img.caption}</figcaption>
            </figure>
          `).join('')}
        </div>
      </div>`
    : '';

  panelBody.innerHTML = `
    <div class="panel-road-name">${road.roadDesignation}</div>
    <div class="panel-region">${road.county}, ${road.region}</div>
    ${imagesHTML}
    <p class="panel-desc">${road.description}</p>
    <div class="panel-meta">
      <div class="meta-item">
        <span class="meta-label">Distance</span>
        <span class="meta-value">${road.distance}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Elevation</span>
        <span class="meta-value">${road.elevation}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Character</span>
        <span class="meta-value"><span class="diff-badge ${road.difficulty}">${road.difficulty}</span></span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Region</span>
        <span class="meta-value" style="color: ${countryColor}">${road.region}</span>
      </div>
    </div>
    <div class="panel-highlights">
      <h3>What Makes It Special</h3>
      <ul class="highlight-list">
        ${road.highlights.map(h => `<li><span class="highlight-dot"></span>${h}</li>`).join('')}
      </ul>
    </div>
    <div class="panel-highlights">
      <h3>Driving Tip</h3>
      <ul class="highlight-list">
        <li><span class="highlight-dot" style="background: var(--color-challenging)"></span>${road.tip}</li>
      </ul>
    </div>
  `;

  requestAnimationFrame(() => map.invalidateSize());
}

panelClose.addEventListener('click', () => {
  panel.classList.add('collapsed');
  clearRoute();
  map.flyTo([54.5, -3.5], 6, { duration: 0.8 });
});

// Make globally accessible for popup onclick
window.showRoadPanel = showRoadPanel;

/* ===== COUNTRY FILTER ===== */
let activeCountry = 'all';
let activeDifficulty = 'all';
let searchQuery = '';

document.querySelectorAll('.nav-btn[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCountry = btn.dataset.filter;
    applyFilters();
  });
});

/* ===== DIFFICULTY FILTER ===== */
document.querySelectorAll('.diff-btn[data-difficulty]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-btn[data-difficulty]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeDifficulty = btn.dataset.difficulty;
    applyFilters();
  });
});

/* ===== SEARCH ===== */
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  applyFilters();
});

/* ===== APPLY FILTERS ===== */
function applyFilters() {
  clearRoute();
  panel.classList.add('collapsed');
  markerGroup.clearLayers();

  const filtered = markers.filter(m => {
    const road = m.roadData;
    const matchCountry = activeCountry === 'all' || road.region.toLowerCase() === activeCountry;
    const matchDifficulty = activeDifficulty === 'all' || road.difficulty === activeDifficulty;
    const matchSearch = !searchQuery || 
      road.name.toLowerCase().includes(searchQuery) ||
      road.county.toLowerCase().includes(searchQuery) ||
      road.roadDesignation.toLowerCase().includes(searchQuery) ||
      road.region.toLowerCase().includes(searchQuery);
    return matchCountry && matchDifficulty && matchSearch;
  });

  filtered.forEach(m => markerGroup.addLayer(m));

  // Update road count
  document.getElementById('roadCount').textContent = filtered.length;

  // Rebuild road grid
  buildRoadGrid(filtered.map(m => m.roadData));

  // Fit map to visible markers
  if (filtered.length > 0) {
    const group = L.featureGroup(filtered);
    map.fitBounds(group.getBounds().pad(0.15), { maxZoom: 10, duration: 0.5 });
  }
}

/* ===== ROAD GRID ===== */
const roadGrid = document.getElementById('roadGrid');

function buildRoadGrid(roads) {
  if (!roads) roads = ROADS_DATA;
  
  roadGrid.innerHTML = roads.map(road => {
    const countryColor = `var(--color-${road.region.toLowerCase()})`;
    const cardImgHTML = road.images && road.images.length
      ? `<div class="road-card-img-wrap">
           <img class="road-card-img" src="${road.images[0].url}" alt="${road.images[0].caption}" loading="lazy">
         </div>`
      : '';
    return `
      <div class="road-card" data-road-id="${road.id}">
        ${cardImgHTML}
        <div class="road-card-header">
          <div>
            <div class="road-card-name">${road.name}</div>
            <div class="road-card-region">${road.county}</div>
          </div>
          <span class="diff-badge ${road.difficulty}">${road.difficulty}</span>
        </div>
        <p class="road-card-desc">${road.description}</p>
        <div class="road-card-footer">
          <span class="road-card-stat" style="color: ${countryColor}">${road.region}</span>
          <span class="road-card-stat">${road.distance}</span>
          <span class="road-card-stat">${road.elevation}</span>
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers to cards
  roadGrid.querySelectorAll('.road-card').forEach(card => {
    card.addEventListener('click', () => {
      const roadId = parseInt(card.dataset.roadId);
      showRoadPanel(roadId);
      document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Initial grid build
buildRoadGrid();

/* ===== SCROLL TO MAP ===== */
document.getElementById('scrollToMap').addEventListener('click', () => {
  document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
});

/* ===== INVALIDATE MAP ON SCROLL INTO VIEW ===== */
const mapObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      map.invalidateSize();
    }
  });
}, { threshold: 0.1 });
mapObserver.observe(document.getElementById('map'));

/* ===== INVALIDATE MAP ON RESIZE (panel open/close, window resize) ===== */
const mapEl = document.getElementById('map');
if (window.ResizeObserver) {
  new ResizeObserver(() => { map.invalidateSize(); }).observe(mapEl);
}

/* ===== PLACES OF INTEREST ===== */
(function() {
  // Custom pane so POI markers sit below road number markers
  map.createPane('poiPane').style.zIndex = 550;

  const activeLayers = {};

  // Lucide SVG paths keyed by icon name (inline, no CDN dependency)
  const iconPaths = {
    landmark:   'M3 22V9l9-7 9 7v13H3zm6 0v-5h6v5H9zm3-15a1 1 0 100 2 1 1 0 000-2z',
    mountain:   'M8 3l4 8 5-5 5 15H2L8 3z',
    waves:      'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2v2c-2.5 0-2.5 2-5 2-2.6 0-2.4-2-5-2C7 9 7 11 4.5 11 3.2 11 2.6 10.5 2 10V6zm0 6c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2v2c-2.5 0-2.5 2-5 2-2.6 0-2.4-2-5-2C7 15 7 17 4.5 17c-1.3 0-1.9-.5-2.5-1v-4z',
    home:       'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm6 11V10h6v10H9z',
    beer:       'M17 11h1a3 3 0 010 6h-1M3 11h14v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11zm3-7l.5 4M11 4l-.5 4',
    trees:      'M17 14c0 3.31-3.13 6-7 6S3 17.31 3 14c0-2.33 1.35-4.38 3.38-5.54A4.99 4.99 0 0110 3a5 5 0 014.62 3.09A5.49 5.49 0 0117 11M10 8v6m0 6v-6',
    flag:       'M4 22V2m0 0l16 6-16 6',
    car:        'M5 17H3V9l2-5h14l2 5v8h-2M5 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0zM3 9h18',
    factory:    'M2 22V10l6-4v4l6-4v4l6-4v12H2zm3-4h2v4H5zm5 0h2v4h-2zm5 0h2v4h-2z',
  };

  function makeSvgIcon(category) {
    const { color, icon } = POIS_DATA[category];
    const path = iconPaths[icon] || iconPaths.landmark;
    return L.divIcon({
      className: '',
      html: `<div class="poi-marker" style="--poi-bg:${color}">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" width="12" height="12">
                 <path d="${path}"/>
               </svg>
             </div>`,
      iconSize:   [26, 26],
      iconAnchor: [13, 13],
      popupAnchor:[0, -16]
    });
  }

  function buildLayer(category) {
    const { color, pois } = POIS_DATA[category];
    const icon = makeSvgIcon(category);
    const layer = L.layerGroup();
    pois.forEach(poi => {
      const marker = L.marker([poi.lat, poi.lng], { icon, pane: 'poiPane' });
      marker.bindPopup(`
        <div class="popup-name">${poi.name}</div>
        <div class="popup-region" style="color:${color};text-transform:capitalize;font-weight:600;margin-bottom:6px">${category}</div>
        <p style="font-size:0.8rem;color:var(--color-text-muted);margin:0;max-width:220px;line-height:1.5">${poi.desc}</p>
      `, { maxWidth: 260 });
      layer.addLayer(marker);
    });
    return layer;
  }

  document.querySelectorAll('.poi-btn[data-poi]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.poi;
      const isOn = btn.getAttribute('aria-pressed') === 'true';

      if (isOn) {
        map.removeLayer(activeLayers[cat]);
        delete activeLayers[cat];
        btn.setAttribute('aria-pressed', 'false');
      } else {
        if (!activeLayers[cat]) activeLayers[cat] = buildLayer(cat);
        activeLayers[cat].addTo(map);
        btn.setAttribute('aria-pressed', 'true');
      }
    });
  });
})();

/* ===== HEADER SCROLL SHADOW ===== */
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 10) {
    header.style.boxShadow = 'var(--shadow-md)';
  } else {
    header.style.boxShadow = 'none';
  }
  lastScroll = current;
}, { passive: true });
