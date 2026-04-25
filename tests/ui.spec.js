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
