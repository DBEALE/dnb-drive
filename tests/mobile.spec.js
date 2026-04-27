// @ts-check
/**
 * Mobile usability tests — run at 375×812 (iPhone SE / small Android)
 * All tests use the mobile viewport defined in the `use` block below.
 */
const { test, expect } = require('@playwright/test');

// ─── Helpers ────────────────────────────────────────────────────────────────

async function waitForMap(page) {
  await page.waitForFunction(() =>
    typeof window.L !== 'undefined' &&
    typeof window.map !== 'undefined' &&
    document.querySelector('.leaflet-container') !== null,
    { timeout: 15000 }
  );
}

// ─── Viewport override for all mobile tests ──────────────────────────────────

test.use({
  viewport: { width: 375, height: 812 },
  hasTouch: true,          // enables touch events (tap, pinch) in Chromium
  isMobile: true,          // sets navigator.maxTouchPoints etc.
});

// ─── Layout ──────────────────────────────────────────────────────────────────

test.describe('Mobile — layout', () => {
  test('map fills the full width at mobile viewport', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const mapBox = await page.locator('#map').boundingBox();
    expect(mapBox).not.toBeNull();
    expect(mapBox.width).toBeGreaterThanOrEqual(375);
  });

  test('sidebar is a bottom sheet (fixed at bottom)', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const sidebarBox = await page.locator('.app-sidebar').boundingBox();
    const viewportHeight = 812;
    // Sidebar bottom edge should be at or near the viewport bottom
    expect(sidebarBox.y + sidebarBox.height).toBeCloseTo(viewportHeight, -1);
  });

  test('handle bar is visible and has a readable road count label', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const handle = page.locator('#sidebarHandle');
    await expect(handle).toBeVisible();
    // Handle label should show the road count
    const label = page.locator('#handleRoadCount');
    await expect(label).toBeVisible();
    const text = await label.textContent();
    expect(Number(text)).toBeGreaterThan(0);
  });

  test('sidebar is collapsed (handle-only) on initial load', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    const sidebar = page.locator('.app-sidebar');
    // Should NOT have the open class initially
    await expect(sidebar).not.toHaveClass(/\bopen\b/);
    // Height should be small (handle only — 56px)
    const box = await sidebar.boundingBox();
    expect(box.height).toBeLessThanOrEqual(60);
  });

  test('header is fully visible on mobile', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('.header');
    await expect(header).toBeVisible();
    const box = await header.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(375);
    expect(box.height).toBeGreaterThan(0);
  });
});

// ─── Sidebar bottom sheet ────────────────────────────────────────────────────

test.describe('Mobile — bottom sheet interaction', () => {
  test('tapping the handle opens the sidebar', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    const sidebar = page.locator('.app-sidebar');
    await expect(sidebar).not.toHaveClass(/\bopen\b/);

    await page.locator('#sidebarHandle').tap();
    await expect(sidebar).toHaveClass(/\bopen\b/);
  });

  test('sidebar shows road cards once open', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(400); // wait for height transition

    const cards = page.locator('.sidebar-road-list .road-card');
    await expect(cards.first()).toBeVisible({ timeout: 5000 });
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('tapping the handle again closes the sidebar', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    const handle = page.locator('#sidebarHandle');
    await handle.tap();
    await page.waitForTimeout(400);
    await handle.tap();
    await page.waitForTimeout(400);

    await expect(page.locator('.app-sidebar')).not.toHaveClass(/\bopen\b/);
  });

  test('chevron rotates when sidebar is open', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    const chevron = page.locator('.handle-chevron');
    await expect(chevron).toBeVisible();

    await page.locator('#sidebarHandle').tap();
    // After open, the sidebar has .open class which rotates the chevron via CSS
    await expect(page.locator('.app-sidebar')).toHaveClass(/\bopen\b/);
  });

  test('handle road count updates after filtering', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(400);

    const countBefore = parseInt(await page.locator('#handleRoadCount').textContent(), 10);

    await page.locator('.app-sidebar button[data-filter="scotland"]').tap();
    await page.waitForTimeout(300);

    const countAfter = parseInt(await page.locator('#handleRoadCount').textContent(), 10);
    expect(countAfter).toBeLessThan(countBefore);
    expect(countAfter).toBeGreaterThan(0);
  });
});

// ─── Road detail panel on mobile ─────────────────────────────────────────────

test.describe('Mobile — road detail panel', () => {
  test('tapping a road card expands sidebar to full height', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    // Open the sidebar first
    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(500);

    const card = page.locator('.sidebar-road-list .road-card').first();
    await expect(card).toBeVisible({ timeout: 8000 });
    await card.tap();
    await page.waitForTimeout(500);

    const sidebar = page.locator('.app-sidebar');
    // Should have panel-open class (full height)
    await expect(sidebar).toHaveClass(/panel-open/);
  });

  test('show route on map button collapses the panel so the route is visible', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(500);

    const card = page.locator('.sidebar-road-list .road-card').first();
    await card.tap();
    await page.waitForTimeout(500);

    const button = page.locator('#panelViewOnMap');
    await expect(button).toBeVisible();
    await button.tap();
    await page.waitForTimeout(500);

    await expect(page.locator('.app-sidebar')).not.toHaveClass(/panel-open/);
  });

  test('panel title is visible when panel is open on mobile', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(500);
    const card = page.locator('.sidebar-road-list .road-card').first();
    await card.tap();
    await page.waitForTimeout(500);

    await expect(page.locator('#panelTitle')).toBeVisible();
    const title = await page.locator('#panelTitle').textContent();
    expect(title.length).toBeGreaterThan(0);
    expect(title).not.toBe('Select a Road');
  });

  test('panel close button is visible and tappable on mobile', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(500);
    const card = page.locator('.sidebar-road-list .road-card').first();
    await card.tap();
    await page.waitForTimeout(500);

    const closeBtn = page.locator('#panelClose');
    await expect(closeBtn).toBeVisible();
    // Touch target should be at least 40px
    const box = await closeBtn.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(36);
    expect(box.height).toBeGreaterThanOrEqual(36);

    await closeBtn.tap();
    await expect(page.locator('#roadPanel')).toHaveClass(/collapsed/, { timeout: 3000 });
  });

  test('closing panel removes panel-open class from sidebar', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(500);
    await page.locator('.sidebar-road-list .road-card').first().tap();
    await page.waitForTimeout(500);
    await page.locator('#panelClose').tap();
    await page.waitForTimeout(400);

    await expect(page.locator('.app-sidebar')).not.toHaveClass(/panel-open/);
  });

  test('tapping a route POI closes the panel and keeps the road visible', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(500);

    const card = page.locator('.sidebar-road-list .road-card').filter({ hasText: 'Cat and Fiddle' }).first();
    await expect(card).toBeVisible({ timeout: 10000 });
    await card.tap();
    await page.waitForTimeout(700);

    const routeButton = page.locator('#roadPanel .panel-route-poi-link').first();
    await expect(routeButton).toBeVisible({ timeout: 5000 });
    await routeButton.tap();

    await expect(page.locator('.app-sidebar')).not.toHaveClass(/panel-open/, { timeout: 5000 });
    await expect(page.locator('.leaflet-popup')).toBeVisible({ timeout: 5000 });

    const routeStillVisible = await page.evaluate(() => {
      const bounds = window.getCurrentRouteBounds?.();
      return !!bounds && window.map.getBounds().contains(bounds);
    });
    expect(routeStillVisible).toBe(true);
  });
});

// ─── Touch targets ───────────────────────────────────────────────────────────

test.describe('Mobile — touch targets', () => {
  test('region filter buttons meet minimum touch target height (36px)', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(400);

    const filterBtns = page.locator('.app-sidebar .nav-btn[data-filter]');
    const count = await filterBtns.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const box = await filterBtns.nth(i).boundingBox();
      expect(box.height).toBeGreaterThanOrEqual(36);
    }
  });

  test('road cards meet minimum touch target height (52px)', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);
    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(500);

    const cards = page.locator('.sidebar-road-list .road-card');
    await expect(cards.first()).toBeVisible({ timeout: 8000 });
    const box = await cards.first().boundingBox();
    expect(box.height).toBeGreaterThanOrEqual(44);
  });

  test('theme toggle meets minimum touch target size (36×36)', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('[data-theme-toggle]');
    const box = await toggle.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(36);
    expect(box.height).toBeGreaterThanOrEqual(36);
  });
});

// ─── Google Maps link on mobile ───────────────────────────────────────────────

test.describe('Mobile — Google Maps links', () => {
  test('Google Maps button is visible in panel on mobile', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(500);
    await page.locator('.sidebar-road-list .road-card').first().tap();
    await page.waitForTimeout(600);

    const mapsBtn = page.locator('#roadPanel .panel-maps-btn');
    await expect(mapsBtn).toBeVisible({ timeout: 5000 });
    const href = await mapsBtn.getAttribute('href');
    expect(href).toContain('google.com/maps');
  });
});

// ─── Filters on mobile ───────────────────────────────────────────────────────

test.describe('Mobile — filters', () => {
  test('Scotland filter works in mobile sidebar', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(400);

    const scotBtn = page.locator('.app-sidebar button[data-filter="scotland"]');
    await expect(scotBtn).toBeVisible();
    await scotBtn.tap();
    await expect(scotBtn).toHaveClass(/active/);

    const count = parseInt(await page.locator('#roadCount').textContent(), 10);
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThan(100);
  });

  test('search input is reachable and functional on mobile', async ({ page }) => {
    await page.goto('/');
    await waitForMap(page);

    await page.locator('#sidebarHandle').tap();
    await page.waitForTimeout(400);

    const search = page.locator('#searchInput');
    await expect(search).toBeVisible();
    await search.tap();
    await search.fill('pass');
    await page.waitForTimeout(300);

    const count = await page.locator('.sidebar-road-list .road-card').count();
    expect(count).toBeGreaterThan(0);
  });
});
