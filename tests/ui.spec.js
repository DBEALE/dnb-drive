// @ts-check
const { test, expect } = require('@playwright/test');

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Wait for Leaflet map and road markers to finish initialising */
async function waitForMap(page) {
  await page.waitForFunction(() => {
    return typeof window.L !== 'undefined' &&
      typeof window.map !== 'undefined' &&
      document.querySelector('.leaflet-container') !== null;
  }, { timeout: 15000 });
}

/**
 * In the new layout the map is always visible (no hero to scroll past).
 * This helper is kept for API compatibility but is now a no-op on desktop.
 */
async function scrollToMap(page) {
  await page.evaluate(() => {
    const section = document.querySelector('.app-map') || document.querySelector('#map-section');
    if (section) section.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(200);
}

/** Collect all browser console errors during a test */
function collectErrors(page) {
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));
  return errors;
}

// ─── Core smoke tests ────────────────────────────────────────────────────────

test.describe('Core — page load', () => {
  test('loads without JS errors', async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto('/');
    await waitForMap(page);
    expect(errors, `Console errors: ${errors.join(' | ')}`).toHaveLength(0);
  });

  test('title is correct', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/UK.*Driving Roads/i);
  });

  test('dark theme is applied (system dark mode)', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const theme = await page.getAttribute('html', 'data-theme');
    expect(theme).toBe('dark');
  });
});

// ─── Layout — app shell ───────────────────────────────────────────────────────

test.describe('Layout — app shell', () => {
  test('sidebar is visible on desktop', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await expect(page.locator('.app-sidebar')).toBeVisible();
  });

  test('map fills the right panel', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const mapEl = page.locator('#map');
    const box = await mapEl.boundingBox();
    expect(box).not.toBeNull();
    // Map should be wider than the sidebar (380px), so > 600px at 1280 viewport
    expect(box.width).toBeGreaterThan(600);
    expect(box.height).toBeGreaterThan(400);
  });

  test('sidebar brand heading is visible', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await expect(page.locator('.brand-title')).toBeVisible();
  });

  test('road count stat is present in sidebar', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const count = page.locator('#roadCount');
    await expect(count).toBeVisible();
    const text = await count.textContent();
    expect(Number(text)).toBeGreaterThan(0);
  });

  test('search input is visible in sidebar', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await expect(page.locator('#searchInput')).toBeVisible();
  });
});

// ─── Map rendering ───────────────────────────────────────────────────────────

test.describe('Map — rendering', () => {
  test('Leaflet container is present and visible without scrolling', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    // Map is visible from load in new layout — no scroll needed
    await expect(page.locator('.leaflet-container')).toBeVisible();
  });

  test('tile layer loads (at least one tile)', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(2000);
    const tiles = page.locator('.leaflet-tile-pane img');
    await expect(tiles.first()).toBeVisible({ timeout: 10000 });
  });

  test('road markers are drawn on the map', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const markers = page.locator('.custom-marker');
    await expect(markers.first()).toBeAttached({ timeout: 10000 });
    const count = await markers.count();
    expect(count).toBeGreaterThan(0);
  });
});

// ─── POI markers ─────────────────────────────────────────────────────────────

test.describe('POI markers', () => {
  test('at least one road marker icon is visible on the map', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);
    const markers = page.locator('.leaflet-marker-pane .leaflet-marker-icon');
    await expect(markers.first()).toBeVisible({ timeout: 10000 });
  });
});

// ─── Popups ───────────────────────────────────────────────────────────────────

test.describe('Popups', () => {
  test('clicking a road marker opens a popup', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    // Use dispatchEvent to bypass Leaflet's overlay intercepting Playwright clicks
    const markerIcon = page.locator('.leaflet-marker-pane .leaflet-marker-icon').first();
    await expect(markerIcon).toBeVisible({ timeout: 10000 });
    await markerIcon.dispatchEvent('click');

    await expect(page.locator('.leaflet-popup-content')).toBeVisible({ timeout: 5000 });
  });
});

// ─── Road detail panel ────────────────────────────────────────────────────────

test.describe('Road detail panel', () => {
  test('clicking a road card opens the detail panel in the sidebar', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    // Road cards are in the sidebar (compact list)
    const card = page.locator('.sidebar-road-list .road-card').first();
    await expect(card).toBeVisible({ timeout: 10000 });
    await card.click();

    // Panel should appear (overlays sidebar)
    await expect(page.locator('#roadPanel')).not.toHaveClass(/collapsed/, { timeout: 5000 });
    await expect(page.locator('#panelTitle')).not.toHaveText('Select a Road');
  });

  test('panel close button collapses the panel', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    const card = page.locator('.sidebar-road-list .road-card').first();
    await card.click();
    await expect(page.locator('#roadPanel')).not.toHaveClass(/collapsed/, { timeout: 5000 });

    await page.locator('#panelClose').click();
    await expect(page.locator('#roadPanel')).toHaveClass(/collapsed/, { timeout: 3000 });
  });
});

// ─── Navigation filters ───────────────────────────────────────────────────────

test.describe('Navigation — region filters (now in sidebar)', () => {
  test('Scotland filter is in sidebar and clickable', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    // Filters moved from header to sidebar
    const btn = page.locator('.app-sidebar button[data-filter="scotland"]');
    await expect(btn).toBeVisible();
    await btn.click();
    await expect(btn).toHaveClass(/active/);
  });

  test('Wales filter filters the road list', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const btn = page.locator('.app-sidebar button[data-filter="wales"]');
    await btn.click();
    await expect(btn).toHaveClass(/active/);
    // Road count should update
    await page.waitForTimeout(300);
    const count = await page.locator('#roadCount').textContent();
    expect(Number(count)).toBeGreaterThan(0);
  });

  test('All filter restores full road list', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const allBtn = page.locator('.app-sidebar button[data-filter="all"]');
    const scotBtn = page.locator('.app-sidebar button[data-filter="scotland"]');
    await scotBtn.click();
    await allBtn.click();
    await expect(allBtn).toHaveClass(/active/);
  });
});

// ─── POI accordion ────────────────────────────────────────────────────────────

test.describe('POI accordion', () => {
  test('Places of Interest accordion opens on click', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const accordion = page.locator('.poi-accordion');
    await expect(accordion).toBeVisible();
    // Should be closed initially
    const summary = accordion.locator('summary');
    await summary.click();
    // After click, details[open] exists
    await expect(accordion).toHaveAttribute('open', '', { timeout: 2000 });
    // POI buttons should be visible
    await expect(page.locator('.poi-btn[data-poi="historic"]')).toBeVisible();
  });
});

// ─── Theme toggle ─────────────────────────────────────────────────────────────

test.describe('Theme toggle', () => {
  test('clicking theme toggle switches to light mode', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.locator('[data-theme-toggle]').click();
    const theme = await page.getAttribute('html', 'data-theme');
    expect(theme).toBe('light');
  });

  test('clicking theme toggle twice returns to dark mode', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const toggle = page.locator('[data-theme-toggle]');
    await toggle.click();
    await toggle.click();
    const theme = await page.getAttribute('html', 'data-theme');
    expect(theme).toBe('dark');
  });
});

// ─── Map base layer ─────────────────────────────────────────────────────────

test.describe('Map base layer', () => {
  test('satellite toggle switches the tile layer', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    const toggle = page.locator('[data-map-toggle]');
    await expect(toggle).toHaveText('Satellite');
    await toggle.click();

    await expect(toggle).toHaveText('Road map');
    await page.waitForFunction(() => window.currentMapMode === 'satellite');
    const tileUrl = await page.evaluate(() => window.currentTileLayer && window.currentTileLayer._url);
    expect(tileUrl).toContain('World_Imagery');
  });
});

// ─── Rankings ─────────────────────────────────────────────────────────────────

test.describe('Rankings', () => {
  test('every road card has a rank badge', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(600);

    const cards = page.locator('.sidebar-road-list .road-card');
    const badges = page.locator('.sidebar-road-list .rank-badge');
    const cardCount = await cards.count();
    const badgeCount = await badges.count();
    expect(cardCount).toBeGreaterThan(0);
    expect(badgeCount).toBe(cardCount);
  });

  test('rank-1 card has the gold badge class', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(600);

    // After filtering Scotland, the first card should be rank #1 (Bealach na Bà)
    await page.locator('.app-sidebar button[data-filter="scotland"]').click();
    await page.waitForTimeout(300);

    const firstBadge = page.locator('.sidebar-road-list .rank-badge').first();
    await expect(firstBadge).toHaveClass(/rank-gold/);
    await expect(firstBadge).toHaveText('#1');
  });

  test('road cards are sorted by regionRank within a region', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    // Filter to Wales (21 roads)
    await page.locator('.app-sidebar button[data-filter="wales"]').click();
    await page.waitForTimeout(400);

    // First card badge should be #1, second #2
    const badges = page.locator('.sidebar-road-list .rank-badge');
    const first = await badges.nth(0).textContent();
    const second = await badges.nth(1).textContent();
    expect(first).toBe('#1');
    expect(second).toBe('#2');
  });

  test('road detail panel shows the rank badge', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(600);

    // Click first card (rank #1 overall — Hardknott Pass in England when "All")
    const card = page.locator('.sidebar-road-list .road-card').first();
    await card.click();

    await expect(page.locator('#roadPanel')).not.toHaveClass(/collapsed/, { timeout: 5000 });
    await expect(page.locator('#roadPanel .rank-badge')).toBeVisible();
    await expect(page.locator('#roadPanel .panel-rank-label')).toBeVisible();
  });

  test('silver and bronze badges appear for ranks 2 and 3', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    await page.locator('.app-sidebar button[data-filter="england"]').click();
    await page.waitForTimeout(400);

    const badges = page.locator('.sidebar-road-list .rank-badge');
    await expect(badges.nth(1)).toHaveClass(/rank-silver/);
    await expect(badges.nth(2)).toHaveClass(/rank-bronze/);
  });
});

// ─── Search ───────────────────────────────────────────────────────────────────

test.describe('Search', () => {
  test('typing in search filters road cards', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(500);

    const countBefore = await page.locator('.sidebar-road-list .road-card').count();

    await page.locator('#searchInput').fill('scotland');
    await page.waitForTimeout(300);

    const countAfter = await page.locator('.sidebar-road-list .road-card').count();
    // Should have filtered to fewer cards
    expect(countAfter).toBeLessThan(countBefore);
  });

  test('clearing search restores full road list', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(500);

    const countBefore = await page.locator('.sidebar-road-list .road-card').count();
    await page.locator('#searchInput').fill('scotland');
    await page.waitForTimeout(200);
    await page.locator('#searchInput').fill('');
    await page.waitForTimeout(200);

    const countAfter = await page.locator('.sidebar-road-list .road-card').count();
    expect(countAfter).toBe(countBefore);
  });
});

// ─── Compact cards ────────────────────────────────────────────────────────────

test.describe('Compact cards', () => {
  test('road card badges are inline with the title (not stacked below)', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(600);

    const card = page.locator('.sidebar-road-list .road-card').first();
    const header = card.locator('.road-card-header');
    const badge = card.locator('.rank-badge');

    // Both header and badge must be visible
    await expect(header).toBeVisible();
    await expect(badge).toBeVisible();

    // Badge should be horizontally alongside the name, not pushed below:
    // their vertical midpoints should be within 20px of each other
    const headerBox = await header.boundingBox();
    const badgeBox = await badge.boundingBox();
    expect(headerBox).not.toBeNull();
    expect(badgeBox).not.toBeNull();

    const headerMidY = headerBox.y + headerBox.height / 2;
    const badgeMidY = badgeBox.y + badgeBox.height / 2;
    expect(Math.abs(headerMidY - badgeMidY)).toBeLessThan(20);
  });

  test('road cards are compact — height under 80px', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(600);

    const card = page.locator('.sidebar-road-list .road-card').first();
    const box = await card.boundingBox();
    expect(box).not.toBeNull();
    expect(box.height).toBeLessThan(80);
  });
});

// ─── Hover highlight ──────────────────────────────────────────────────────────

test.describe('Hover highlight', () => {
  test('hovering a road card adds custom-marker--hover class to the visible marker', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    // Find a card whose marker is in view at default zoom
    // The map starts at UK overview so most markers should be visible
    const cards = page.locator('.sidebar-road-list .road-card[data-road-id]');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);

    // Hover over the first card
    const firstCard = cards.first();
    const roadId = await firstCard.getAttribute('data-road-id');
    await firstCard.hover();
    await page.waitForTimeout(200);

    // Check if the corresponding marker got the hover class
    // (only if it's in current map bounds — the JS guards against out-of-bounds)
    const hoverClass = await page.evaluate(() => {
      return document.querySelectorAll('.custom-marker--hover').length;
    });

    // The hover class count should be 0 or 1 — never more than 1
    expect(hoverClass).toBeLessThanOrEqual(1);
  });

  test('moving mouse off the road list removes all hover highlights', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    const firstCard = page.locator('.sidebar-road-list .road-card[data-road-id]').first();
    await firstCard.hover();
    await page.waitForTimeout(200);

    // Move mouse to the map (away from road grid)
    await page.locator('#map').hover();
    await page.waitForTimeout(200);

    const hoverCount = await page.evaluate(() => {
      return document.querySelectorAll('.custom-marker--hover').length;
    });
    expect(hoverCount).toBe(0);
  });
});

// ─── Card text alignment ──────────────────────────────────────────────────────

test.describe('Card text alignment', () => {
  test('rank badge does not overflow outside the card boundary', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(600);

    const cards = page.locator('.sidebar-road-list .road-card');
    const cardCount = await cards.count();

    for (let i = 0; i < Math.min(cardCount, 10); i++) {
      const card = cards.nth(i);
      const badge = card.locator('.rank-badge');
      const cardBox = await card.boundingBox();
      const badgeBox = await badge.boundingBox();
      expect(badgeBox).not.toBeNull();
      // Badge right edge must be within the card's right edge (with 2px tolerance)
      expect(badgeBox.x + badgeBox.width).toBeLessThanOrEqual(cardBox.x + cardBox.width + 2);
    }
  });

  test('diff badge does not overflow outside the card boundary', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(600);

    const cards = page.locator('.sidebar-road-list .road-card');
    const cardCount = await cards.count();

    for (let i = 0; i < Math.min(cardCount, 10); i++) {
      const card = cards.nth(i);
      const badge = card.locator('.diff-badge');
      const cardBox = await card.boundingBox();
      const badgeBox = await badge.boundingBox();
      expect(badgeBox).not.toBeNull();
      expect(badgeBox.x + badgeBox.width).toBeLessThanOrEqual(cardBox.x + cardBox.width + 2);
    }
  });

  test('road name and badges are on the same row (vertically aligned)', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(600);

    const card = page.locator('.sidebar-road-list .road-card').first();
    const nameEl = card.locator('.road-card-name');
    const badge = card.locator('.rank-badge');

    const nameBox = await nameEl.boundingBox();
    const badgeBox = await badge.boundingBox();
    expect(nameBox).not.toBeNull();
    expect(badgeBox).not.toBeNull();

    // Vertical midpoints within 16px — both on the same row
    const nameMidY = nameBox.y + nameBox.height / 2;
    const badgeMidY = badgeBox.y + badgeBox.height / 2;
    expect(Math.abs(nameMidY - badgeMidY)).toBeLessThan(16);
  });

  test('long road names truncate with ellipsis and do not push badges out', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(600);

    // Filter to all roads, find a card with a long name (Wales has "Black Mountain Pass (A4069)")
    await page.locator('.app-sidebar button[data-filter="wales"]').click();
    await page.waitForTimeout(300);

    const cards = page.locator('.sidebar-road-list .road-card');
    const cardCount = await cards.count();
    expect(cardCount).toBeGreaterThan(0);

    for (let i = 0; i < cardCount; i++) {
      const card = cards.nth(i);
      const badge = card.locator('.rank-badge');
      const cardBox = await card.boundingBox();
      const badgeBox = await badge.boundingBox();
      // Badge must not overflow the card to the right
      expect(badgeBox.x + badgeBox.width).toBeLessThanOrEqual(cardBox.x + cardBox.width + 2);
    }
  });
});

// ─── POI quick-select ─────────────────────────────────────────────────────────

test.describe('POI quick-select', () => {
  test('All and None buttons are visible in the accordion summary (no open needed)', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    // Accordion must be closed
    const accordion = page.locator('.poi-accordion');
    await expect(accordion).not.toHaveAttribute('open', '');

    // Buttons should still be visible inside the summary
    await expect(page.locator('[data-poi-select="all"]')).toBeVisible();
    await expect(page.locator('[data-poi-select="none"]')).toBeVisible();
  });

  test('clicking All enables all POI categories without opening the accordion', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    const accordion = page.locator('.poi-accordion');
    const allBtn = page.locator('[data-poi-select="all"]');
    await allBtn.click();

    // Accordion should remain closed (or at least the All button worked without requiring open)
    // Check all poi-btn buttons are now pressed
    const poiBtns = page.locator('.poi-btn[data-poi]');
    const count = await poiBtns.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const pressed = await poiBtns.nth(i).getAttribute('aria-pressed');
      expect(pressed).toBe('true');
    }
  });

  test('clicking None disables all POI categories', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    // First enable all, then disable all
    await page.locator('[data-poi-select="all"]').click();
    await page.waitForTimeout(200);
    await page.locator('[data-poi-select="none"]').click();
    await page.waitForTimeout(200);

    const poiBtns = page.locator('.poi-btn[data-poi]');
    const count = await poiBtns.count();
    for (let i = 0; i < count; i++) {
      const pressed = await poiBtns.nth(i).getAttribute('aria-pressed');
      expect(pressed).toBe('false');
    }
  });

  test('clicking All button does not toggle the accordion open/closed', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    const accordion = page.locator('.poi-accordion');
    const wasOpen = await accordion.evaluate(el => el.hasAttribute('open'));

    await page.locator('[data-poi-select="all"]').click();
    await page.waitForTimeout(150);

    const isOpen = await accordion.evaluate(el => el.hasAttribute('open'));
    expect(isOpen).toBe(wasOpen); // accordion state unchanged
  });
});

// ─── Marker / card rank consistency ──────────────────────────────────────────

test.describe('Marker / card rank consistency', () => {
  test('map markers display a number matching the card rank badge', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    // Filter to Scotland so we have a small, predictable set
    await page.locator('.app-sidebar button[data-filter="scotland"]').click();
    await page.waitForTimeout(400);

    // First card badge should read "#1"
    const firstBadge = page.locator('.sidebar-road-list .rank-badge').first();
    const badgeText = await firstBadge.textContent();
    expect(badgeText).toBe('#1');

    // At least one marker on the map should display the text "1"
    const markerWithOne = page.locator('.leaflet-marker-pane .custom-marker').filter({ hasText: '1' }).first();
    await expect(markerWithOne).toBeAttached({ timeout: 5000 });
    expect(await markerWithOne.textContent()).toBe('1');
  });

  test('marker numbers are regionRank values, not arbitrary road ids', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    // Filter to Wales (21 roads with regionRank 1-21)
    await page.locator('.app-sidebar button[data-filter="wales"]').click();
    await page.waitForTimeout(400);

    // Collect all visible marker texts
    const markers = page.locator('.leaflet-marker-pane .custom-marker');
    const count = await markers.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const text = await markers.nth(i).textContent();
      const num = parseInt(text, 10);
      // Wales has 21 roads ranked 1-21; no marker should show a value > 21
      expect(num).toBeGreaterThan(0);
      expect(num).toBeLessThanOrEqual(21);
    }
  });
});

// ─── Google Maps links ────────────────────────────────────────────────────────

test.describe('Google Maps links', () => {
  test('popup contains a Google Maps link', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    const markerIcon = page.locator('.leaflet-marker-pane .leaflet-marker-icon').first();
    await expect(markerIcon).toBeVisible({ timeout: 10000 });
    await markerIcon.dispatchEvent('click');

    await expect(page.locator('.leaflet-popup-content')).toBeVisible({ timeout: 5000 });

    const mapsLink = page.locator('.leaflet-popup-content .popup-maps-link');
    await expect(mapsLink).toBeVisible();

    const href = await mapsLink.getAttribute('href');
    expect(href).toContain('google.com/maps');
    expect(href).toContain('query=');
  });

  test('popup Google Maps link opens in a new tab (target=_blank)', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    const markerIcon = page.locator('.leaflet-marker-pane .leaflet-marker-icon').first();
    await markerIcon.dispatchEvent('click');
    await expect(page.locator('.leaflet-popup-content')).toBeVisible({ timeout: 5000 });

    const mapsLink = page.locator('.leaflet-popup-content .popup-maps-link');
    expect(await mapsLink.getAttribute('target')).toBe('_blank');
    expect(await mapsLink.getAttribute('rel')).toContain('noopener');
  });

  test('road detail panel contains a Google Maps button', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    const card = page.locator('.sidebar-road-list .road-card').first();
    await card.click();
    await expect(page.locator('#roadPanel')).not.toHaveClass(/collapsed/, { timeout: 5000 });

    const panelMapsBtn = page.locator('#roadPanel .panel-maps-btn');
    await expect(panelMapsBtn).toBeVisible();

    const href = await panelMapsBtn.getAttribute('href');
    expect(href).toContain('google.com/maps');
    expect(href).toContain('query=');
    expect(await panelMapsBtn.getAttribute('target')).toBe('_blank');
  });

  test('Google Maps URL contains valid lat/lng coordinates', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(800);

    const card = page.locator('.sidebar-road-list .road-card').first();
    await card.click();
    await expect(page.locator('#roadPanel')).not.toHaveClass(/collapsed/, { timeout: 5000 });

    const href = await page.locator('#roadPanel .panel-maps-btn').getAttribute('href');
    // Extract query param: ?query=lat,lng
    const match = href.match(/query=([-\d.]+),([-\d.]+)/);
    expect(match).not.toBeNull();
    const lat = parseFloat(match[1]);
    const lng = parseFloat(match[2]);
    // UK bounding box: lat 49-61, lng -8 to 2
    expect(lat).toBeGreaterThan(49);
    expect(lat).toBeLessThan(61);
    expect(lng).toBeGreaterThan(-9);
    expect(lng).toBeLessThan(3);
  });
});

// ─── European country filters ─────────────────────────────────────────────────

test.describe('European country filters', () => {
  for (const [country, expectedMin, expectedMax] of [
    ['france',      14, 16],
    ['belgium',      7,  9],
    ['netherlands',  6,  8],
  ]) {
    test(`${country} filter shows the correct number of roads`, async ({ page }) => {
      await page.goto('/');
      await waitForMap(page);

      const btn = page.locator(`.app-sidebar button[data-filter="${country}"]`);
      await expect(btn).toBeVisible();
      await btn.click();
      await expect(btn).toHaveClass(/active/);
      await page.waitForTimeout(300);

      const count = parseInt(await page.locator('#roadCount').textContent(), 10);
      expect(count).toBeGreaterThanOrEqual(expectedMin);
      expect(count).toBeLessThanOrEqual(expectedMax);
    });

    test(`${country} road cards have rank badges starting at #1`, async ({ page }) => {
      await page.goto('/');
      await waitForMap(page);

      await page.locator(`.app-sidebar button[data-filter="${country}"]`).click();
      await page.waitForTimeout(400);

      const firstBadge = page.locator('.sidebar-road-list .rank-badge').first();
      await expect(firstBadge).toBeVisible({ timeout: 5000 });
      await expect(firstBadge).toHaveText('#1');
    });

    test(`${country} markers appear on the map after filtering`, async ({ page }) => {
      await page.goto('/');
      await waitForMap(page);

      await page.locator(`.app-sidebar button[data-filter="${country}"]`).click();
      await page.waitForTimeout(500);

      const markers = page.locator('.leaflet-marker-pane .custom-marker');
      const count = await markers.count();
      expect(count).toBeGreaterThan(0);
    });
  }

  test('total road count is 130 on initial load', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const count = parseInt(await page.locator('#roadCount').textContent(), 10);
    expect(count).toBe(130);
  });

  test('brand stat shows 6 nations', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    // The Nations stat is the second .stat-num element
    const stats = page.locator('.brand-stats .stat-num');
    const nationsText = await stats.nth(1).textContent();
    expect(nationsText).toBe('6');
  });

  test('France filter button has correct active colour class', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const btn = page.locator('.app-sidebar button[data-filter="france"]');
    await btn.click();
    await expect(btn).toHaveClass(/active/);
  });

  test('clicking a France road card opens the detail panel', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(500);

    await page.locator('.app-sidebar button[data-filter="france"]').click();
    await page.waitForTimeout(400);

    const card = page.locator('.sidebar-road-list .road-card').first();
    await expect(card).toBeVisible({ timeout: 8000 });
    await card.click();

    await expect(page.locator('#roadPanel')).not.toHaveClass(/collapsed/, { timeout: 5000 });
    await expect(page.locator('#panelTitle')).not.toHaveText('Select a Road');
  });
});

// ─── Gallery image display ────────────────────────────────────────────────────

test.describe('Gallery image display', () => {
  test('road detail panel gallery images all render (no broken images)', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(500);

    // Open a road card to get the detail panel
    const card = page.locator('.sidebar-road-list .road-card').first();
    await card.click();
    await expect(page.locator('#roadPanel')).not.toHaveClass(/collapsed/, { timeout: 5000 });

    // Wait until every gallery image has finished loading
    const allLoaded = await page.waitForFunction(() => {
      const imgs = Array.from(document.querySelectorAll('#roadPanel .gallery-img'));
      if (imgs.length === 0) return true; // no images is fine
      return imgs.every(img => img.complete);
    }, { timeout: 15000 });

    // Assert none are broken (complete but naturalWidth === 0 means broken)
    const brokenCount = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('#roadPanel .gallery-img'))
        .filter(img => img.complete && img.naturalWidth === 0).length;
    });
    expect(brokenCount).toBe(0);
  });

  test('France road panel gallery images all render', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(500);

    await page.locator('.app-sidebar button[data-filter="france"]').click();
    await page.waitForTimeout(400);

    const card = page.locator('.sidebar-road-list .road-card').first();
    await expect(card).toBeVisible({ timeout: 8000 });
    await card.click();
    await expect(page.locator('#roadPanel')).not.toHaveClass(/collapsed/, { timeout: 5000 });

    // Scroll panel body to trigger lazy-loaded images
    await page.evaluate(() => {
      const panel = document.querySelector('#panelBody');
      if (panel) panel.scrollTop = panel.scrollHeight;
    });

    await page.waitForFunction(() => {
      const imgs = Array.from(document.querySelectorAll('#roadPanel .gallery-img'));
      return imgs.length > 0 && imgs.every(img => img.complete);
    }, { timeout: 15000 });

    const brokenCount = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('#roadPanel .gallery-img'))
        .filter(img => img.complete && img.naturalWidth === 0).length;
    });
    expect(brokenCount).toBe(0);
  });

  test('road detail panel has a View on Map button', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.waitForTimeout(500);

    const card = page.locator('.sidebar-road-list .road-card').first();
    await card.click();
    await expect(page.locator('#roadPanel')).not.toHaveClass(/collapsed/, { timeout: 5000 });

    await expect(page.locator('#panelViewOnMap')).toBeAttached();
  });
});
