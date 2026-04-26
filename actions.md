# Published Actions — dnb-drive

A running log of all significant changes made to the project by Claude Code agents.

---

## 2026-04-25

### App shell layout redesign
- Replaced the hero + scroll layout with a persistent sidebar + full-height map shell
- Sidebar (380 px) contains brand, search, filters, road list, and footer
- Map fills the remaining viewport (`flex: 1`) at all times — no scrolling needed
- Road detail panel overlays the sidebar via `position: absolute; inset: 0` with fade/slide transition
- Added mobile bottom-sheet with drag handle (collapsed 56 px, open 72 dvh)

### Custom Claude Code agents
- Created `.claude/agents/code-enhancer.md` — senior front-end agent for writing and enhancing code
- Created `.claude/agents/ui-tester.md` — QA agent for running Playwright browser tests

### Playwright test suite
- Set up `package.json`, `playwright.config.js`, `tests/ui.spec.js`
- Chromium, 1280×800, `colorScheme: dark`, auto-started Python HTTP server on port 8765
- 13 baseline tests covering: core load, layout, map rendering, markers, popups, filters, theme toggle

### Per-region road rankings
- Added `regionRank` to all 100 roads in `roads-data.js` (Scotland 1–19, Wales 1–21, England 1–60)
- Rankings based on driving publication references (Evo, Top Gear, Autocar)
- Sidebar cards sorted by `regionRank` within the active filter
- Gold / silver / bronze / default rank badges on every card and in the road detail panel
- Panel shows rank badge + "in {Region}" label
- 6 ranking tests added to `tests/ui.spec.js`

### Compact sidebar cards + hover-highlight
- Fixed `flex-direction: column` bug on `.road-card-header` that caused badges to stack below the road name — changed to `row` with `justify-content: space-between`
- Inner name/region `<div>` given `min-width: 0; overflow: hidden` so long names truncate with ellipsis instead of pushing badges off-screen
- Hovering a card highlights the corresponding map marker (`.custom-marker--hover`) via `mouseover` on `#roadGrid`; only triggers if the marker is already in current map bounds; clears on `mouseleave`
- 4 new tests: compact height, inline badge alignment, hover adds class, mouseleave clears class

---

## 2026-04-26

### Card alignment fix
- Added `.sidebar-road-list .road-card-header > div:first-child { min-width: 0; overflow: hidden }` to prevent long road names (e.g. "Black Mountain Pass (A4069) / Carmarthenshire / Powys") from pushing rank/diff badges outside the card boundary
- 4 alignment tests added: badge overflow bounds check across all Wales cards, same-row vertical alignment

### POI All / None quick-select
- Added "All" and "None" pill buttons inside the `<summary>` of the POI accordion — always visible without expanding the panel
- Buttons call `e.stopPropagation()` so they do not toggle the accordion open/closed
- "All" fires a synthetic `.click()` on every inactive POI button; "None" fires on every active one
- 4 tests added: buttons visible without expanding, All enables all, None disables all, accordion state unchanged on click

### Unified road numbering
- Map markers previously showed `road.id` (arbitrary 1–100); sidebar cards showed `road.regionRank`
- Changed `createMarkerIcon` to display `road.regionRank`, making marker numbers consistent with card badges
- 2 tests added: Scotland markers show values matching card badges; Wales markers show values ≤ 21

### Google Maps links
- Popup (marker click) now includes a "Google Maps ↗" link beside "View details →", both in a flex `.popup-actions` row
- Road detail panel now has a full-width "Open in Google Maps" button at the bottom (`panel-maps-btn`)
- All links use `https://www.google.com/maps/search/?api=1&query={lat},{lng}` with `target="_blank" rel="noopener noreferrer"`
- 4 tests added: popup link present, opens in new tab, panel button present, coordinates within UK bounding box

### Mobile experience overhaul
**Bottom sheet improvements**
- Handle height increased from 48 px to 56 px for easier tapping; border-radius `16px 16px 0 0` for a card-sheet appearance
- Handle strip now shows a road count label (`<span id="handleRoadCount">`) + animated chevron (rotates 180° when open)
- Chevron direction updates with CSS via `.app-sidebar.open .handle-chevron { transform: rotate(180deg) }`
- `#handleRoadCount` kept in sync with `#roadCount` on every filter/search change

**Sidebar height states**
- Collapsed: 56 px (handle only)
- Open: 72 dvh (road list browsing)
- `panel-open`: `calc(100dvh - 60px)` — automatically applied when a road card is tapped, giving the detail panel full reading space
- `panel-open` is removed when the close button is tapped, restoring the road-list height

**Filter row UX**
- Country and difficulty filter rows now scroll horizontally on mobile (`overflow-x: auto; flex-wrap: nowrap`) instead of wrapping to multiple lines
- Scrollbar hidden via `scrollbar-width: none` / `::-webkit-scrollbar { display: none }`
- `nav-btn` and `diff-btn` given `min-height: 36px` touch targets; `white-space: nowrap; flex-shrink: 0` to prevent truncation

**Small screen (≤ 480 px)**
- Header padding tightened; `.logo-sub` hidden to reduce crowding
- Brand title reduced; stat numbers kept visible
- "Plan a Route" button shows icon only (text span hidden)

**Mobile test suite** (`tests/mobile.spec.js`)
- 20 tests across: layout, bottom-sheet interaction, road detail panel, touch targets, Google Maps links, filters
- Uses `viewport: { width: 375, height: 812 }`, `hasTouch: true`, `isMobile: true`
- Covers: map fills full width, sidebar pinned to bottom, handle count label, open/close toggle, chevron visible, filter count sync, panel-open class, panel close restores height, 36 px touch target floor for filters, 44 px floor for road cards, Google Maps button reachable in panel

**Total test count: 66 passing**
