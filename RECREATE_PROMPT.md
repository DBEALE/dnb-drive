# Prompt to Recreate DNB Drive from Scratch

Use the following prompt with any capable AI coding assistant to fully recreate this project:

---

Build a static web application called **"UK's Greatest Driving Roads"** — an interactive map showcasing 100 of the UK's most exhilarating driving roads for sports car enthusiasts. The app uses no build tools or package managers; all dependencies are loaded from CDN.

## File Structure

Create exactly five files:

```
index.html   — HTML shell, CDN imports, all structural markup
app.js       — All interactive logic (map, markers, filters, theme)
roads-data.js — ROADS_DATA global array (20 road objects)
style.css    — Design tokens, dark/light themes, all UI components
base.css     — CSS reset and accessibility foundations
```

---

## Technology Stack (CDN only)

- **Leaflet.js 1.9.4** for the interactive map (`unpkg.com/leaflet@1.9.4/dist/leaflet.css` and `leaflet.js`)
- **CARTO Basemaps** for map tiles — dark: `cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`, light: `cartocdn.com/light_all/{z}/{x}/{y}{r}.png`
- **Lucide Icons** (`unpkg.com/lucide@latest/dist/umd/lucide.js`) — call `lucide.createIcons()` after DOM ready
- **Fontshare** fonts: `Clash Display` (500,600,700) and `General Sans` (400,500,600) via `api.fontshare.com`

---

## Design System (`style.css`)

### CSS Custom Properties

**Typographic scale** (fluid with `clamp`):
- `--text-xs` through `--text-3xl` (smallest: `clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)`, largest: `clamp(2.5rem, 1rem + 4vw, 5rem)`)

**Spacing scale** (4px base): `--space-1` (0.25rem) through `--space-24` (6rem)

**Font families**:
- `--font-display: 'Clash Display', 'Helvetica Neue', sans-serif`
- `--font-body: 'General Sans', 'Helvetica Neue', sans-serif`

**Border radius**: `--radius-sm` (0.375rem) through `--radius-full` (9999px)

**Transition**: `--transition-interactive: 180ms cubic-bezier(0.16, 1, 0.3, 1)`

### Dark Theme (default, `:root` and `[data-theme="dark"]`)
```css
--color-bg: #0f1114
--color-surface: #161a1e
--color-surface-2: #1c2128
--color-surface-offset: #1a1e24
--color-divider: #262d36
--color-border: #2e3640
--color-text: #e2e4e8
--color-text-muted: #8b919a
--color-text-faint: #555c66
--color-text-inverse: #0f1114
--color-primary: #e85d3a
--color-primary-hover: #d44a28
--color-primary-active: #b83e22
--color-primary-light: rgba(232, 93, 58, 0.12)
--color-scotland: #4f98a3
--color-wales: #d4614a
--color-england: #7aa856
--color-thrilling: #e85d3a
--color-challenging: #d4a04a
--color-scenic: #4f98a3
--shadow-sm/md/lg: increasing black drop shadows
```

### Light Theme (`[data-theme="light"]` and `@media (prefers-color-scheme: light)`)
```css
--color-bg: #f5f5f0
--color-surface: #ffffff
--color-primary: #c94a2a
--color-scotland: #1a7a85
--color-wales: #b84a35
--color-england: #5a8a3a
--color-thrilling: #c94a2a
--color-challenging: #b8891a
--color-scenic: #1a7a85
/* lighter shadows with oklch */
```

---

## base.css

Full modern CSS reset:
- Universal `box-sizing: border-box; margin: 0; padding: 0`
- Font smoothing, `text-size-adjust`, `optimizeLegibility`, `scroll-behavior: smooth`
- `scroll-padding-top: 80px` (accounts for sticky header)
- `img, svg` display block; `input, button` font/color inherit
- `h1–h6` text-wrap balance; `p, li, figcaption` text-wrap pretty, max-width 72ch
- `::selection` uses primary colour at 25% opacity
- `:focus-visible` with 2px primary outline, 3px offset
- `@media (prefers-reduced-motion)` disables all transitions/animations
- `.sr-only` visually hidden utility class
- Interactive elements get `transition` for color, background, border-color, box-shadow

---

## HTML Structure (`index.html`)

`<html lang="en" data-theme="dark">` (dark by default)

### `<head>`
- Charset, viewport, title: "UK's Greatest Driving Roads — Interactive Map"
- Meta description about 20 legendary UK routes
- Fontshare link (Clash Display + General Sans)
- Leaflet CSS from unpkg
- Lucide JS from unpkg (in head, deferred)
- `base.css` then `style.css`

### `<header class="header" id="header">` — sticky, blurred backdrop
Inside `.header-inner` (max-width 1400px, flex, space-between):
- `.logo-group`: custom SVG hexagon-road logo icon + `.logo-text` "UK Driving Roads" + `.logo-sub` "The Essential Sports Car Map"
- `<nav class="header-nav">`: four `<button class="nav-btn">` — "All Roads" (active, `data-filter="all"`), "Scotland", "Wales", "England"
- `.theme-toggle` button with sun SVG icon, `data-theme-toggle` attribute, `aria-label="Switch to light mode"`

### `<section class="hero" id="hero">` — full-width hero with radial gradient background + subtle grid lines via `::before`
- `.hero-content > h1`: "Britain's Greatest" + `<br>` + `<span class="hero-accent">Driving Roads</span>`
- `.hero-desc`: "20 legendary routes across England, Scotland, and Wales..."
- `.hero-cta#scrollToMap` button with Lucide `map` icon: "Explore the Map"
- `.hero-stats`: three `.stat` blocks — "100 Roads", "3 Countries", "3,000+ Miles" (road count span has `id="roadCount"`)

### `<section class="map-section" id="map-section">` — max-width 1400px
- `.map-controls` (flex, space-between):
  - `.search-box`: Lucide `search` icon + `<input id="searchInput" placeholder="Search roads...">`
  - `.difficulty-filters`: four `.diff-btn` — "All" (active, `data-difficulty="all"`), "Thrilling", "Challenging", "Scenic"
- `.map-wrapper` (flex row, rounded, overflow hidden, shadow):
  - `<div id="map">` (height 600px)
  - `<aside class="road-panel collapsed" id="roadPanel">`:
    - `.panel-header`: `<h2 id="panelTitle">Select a Road</h2>` + `.panel-close#panelClose` with Lucide `x` icon
    - `.panel-body#panelBody`: initial hint text

### `<section class="road-list-section" id="road-list">`
- `<h2 class="section-title">All Routes at a Glance</h2>`
- `<div class="road-grid" id="roadGrid">` — populated by JS

### `<footer class="site-footer">`
- Responsible driving disclaimer text
- Attribution link

### Scripts (bottom of body)
1. `roads-data.js`
2. `app.js`

---

## roads-data.js

Declare `const ROADS_DATA = [...]` — a global array of 20 road objects. Each object has:

```js
{
  id: Number,           // 1–20
  name: String,         // e.g. "Black Mountain Pass (A4069)"
  region: String,       // "Wales" | "Scotland" | "England"
  county: String,       // e.g. "Carmarthenshire / Powys"
  lat: Number,          // decimal latitude
  lng: Number,          // decimal longitude
  distance: String,     // e.g. "9 miles"
  difficulty: String,   // "thrilling" | "challenging" | "scenic"
  elevation: String,    // e.g. "1,600 ft summit"
  roadDesignation: String, // e.g. "A4069" or "Unclassified"
  description: String,  // 2–3 sentence paragraph
  highlights: String[], // 4 bullet points
  tip: String,          // one driving tip sentence
  images: [{ url: String, caption: String }]  // 2–3 Wikimedia Commons images
}
```

### The 20 Roads (in order):

| id | Name | Region | County | lat | lng | Distance | Difficulty | Elevation | Designation |
|----|------|--------|--------|-----|-----|----------|------------|-----------|-------------|
| 1 | Black Mountain Pass (A4069) | Wales | Carmarthenshire / Powys | 51.835 | -3.775 | 9 miles | thrilling | 1,600 ft summit | A4069 |
| 2 | Bealach na Bà | Scotland | Wester Ross, Highlands | 57.418 | -5.713 | 11 miles | thrilling | 2,053 ft summit | Unclassified |
| 3 | The Evo Triangle | Wales | Denbighshire, North Wales | 53.05 | -3.62 | 20 miles loop | thrilling | 1,400 ft max | A5 / A543 / B4501 |
| 4 | Snake Pass (A57) | England | Derbyshire / Greater Manchester | 53.44 | -1.86 | 14 miles | challenging | 1,680 ft summit | A57 |
| 5 | Cat and Fiddle (A537) | England | Cheshire / Derbyshire | 53.26 | -1.98 | 7 miles | challenging | 1,689 ft summit | A537 |
| 6 | North Coast 500 | Scotland | Highlands | 58.25 | -5.05 | 516 miles loop | scenic | Various | Multiple |
| 7 | Buttertubs Pass | England | North Yorkshire | 54.36 | -2.20 | 6 miles | thrilling | 1,726 ft summit | Unclassified |
| 8 | Atlantic Highway (A39) | England | Devon / Cornwall | 50.83 | -4.55 | 77 miles | scenic | Rolling | A39 |
| 9 | Llanberis Pass (A4086) | Wales | Gwynedd, Snowdonia | 53.08 | -4.05 | 5 miles | challenging | 1,170 ft summit | A4086 |
| 10 | Cheddar Gorge (B3135) | England | Somerset | 51.28 | -2.76 | 3 miles | challenging | 450 ft climb | B3135 |
| 11 | A82 Glencoe | Scotland | Highlands | 56.68 | -5.10 | 10 miles | scenic | 1,024 ft summit | A82 |
| 12 | Horseshoe Pass (A542) | Wales | Denbighshire | 53.07 | -3.21 | 5 miles | challenging | 1,367 ft summit | A542 |
| 13 | Hardknott Pass | England | Cumbria, Lake District | 54.40 | -3.18 | 3 miles | thrilling | 1,289 ft summit | Unclassified |
| 14 | A4067 Sennybridge to Swansea | Wales | Powys / Neath Port Talbot | 51.78 | -3.61 | 22 miles | thrilling | 1,200 ft max | A4067 |
| 15 | Kirkstone Pass (A592) | England | Cumbria, Lake District | 54.48 | -2.92 | 8 miles | scenic | 1,489 ft summit | A592 |
| 16 | B3357 Dartmoor | England | Devon | 50.58 | -3.90 | 18 miles | scenic | 1,400 ft max | B3357 |
| 17 | Snow Roads Scenic Route | Scotland | Cairngorms | 57.05 | -3.40 | 90 miles | scenic | 2,199 ft (Cairnwell Pass) | A93 / A939 |
| 18 | Jurassic Coast Road (B3157) | England | Dorset | 50.63 | -2.62 | 18 miles | scenic | Rolling coastal | B3157 |
| 19 | A44 Aberystwyth to Llangurig | Wales | Ceredigion / Powys | 52.42 | -3.65 | 28 miles | challenging | 1,300 ft max | A44 |
| 20 | A686 Penrith to Alston | England | Cumbria / Northumberland | 54.75 | -2.52 | 20 miles | challenging | 1,903 ft summit | A686 |

For each road, write a 2–3 sentence evocative description, 4 highlights, one practical driving tip, and 2–3 Wikimedia Commons image URLs in the format `https://commons.wikimedia.org/wiki/Special:FilePath/FILENAME.jpg?width=800`.

---

## app.js

### 1. Theme Toggle (IIFE, runs immediately)
- Read system preference with `matchMedia('(prefers-color-scheme: dark)')` as initial value
- On button click, toggle `data-theme` attribute on `document.documentElement`
- Update button `aria-label` and innerHTML (sun SVG for dark mode, moon SVG for light mode)
- If map exists (`window.currentTileLayer && window.map`), remove old tile layer, create new one, add to map

### 2. Lucide icons
Call `lucide.createIcons()` immediately after the IIFE.

### 3. Map Setup
```js
function createTileLayer() {
  // Read data-theme from documentElement
  // Return dark or light CARTO tile layer accordingly
  // subdomains: 'abcd', maxZoom: 18
}

const map = L.map('map', { center: [54.5, -3.5], zoom: 6 });
window.map = map;
window.currentTileLayer = createTileLayer();
window.currentTileLayer.addTo(map);
```

### 4. Markers
- Create a `L.featureGroup()` called `markerGroup`
- For each road, create a `L.divIcon` with `html: '<div class="custom-marker {region}">{id}</div>'` (region lowercase)
- Bind a popup with road name, county/region, difficulty badge, and "View details →" link that calls `showRoadPanel(road.id)`
- Also wire `marker.on('click', () => showRoadPanel(road.id))`
- Store `marker.roadData = road` for filter access
- Push to `markers[]` array and add to `markerGroup`
- Add `markerGroup` to map

### 5. Road Panel (`showRoadPanel(roadId)`)
- Look up road in `ROADS_DATA` by id
- Remove `collapsed` class from `#roadPanel`
- Set `#panelTitle` text
- Build `#panelBody` HTML with:
  - Road designation (styled as uppercase primary-colored label)
  - County, region
  - Horizontally scrollable image gallery (if images exist) — each as `<figure>` with `<img loading="lazy">` and `<figcaption>`
  - Description paragraph
  - 2×2 meta grid: Distance, Elevation, Character (difficulty badge), Region (country color)
  - "What Makes It Special" section: `<ul>` of highlights with dot markers
  - "Driving Tip" section: single item with amber/challenging-colored dot
- Call `map.flyTo([road.lat, road.lng], 10, { duration: 0.8 })`

Panel close button: adds `collapsed` class, flies map back to `[54.5, -3.5]` zoom 6.

Expose `window.showRoadPanel = showRoadPanel` for popup onclick.

### 6. Filters
Three independent state variables: `activeCountry = 'all'`, `activeDifficulty = 'all'`, `searchQuery = ''`

Wire `.nav-btn[data-filter]` clicks → update `activeCountry`, call `applyFilters()`
Wire `.diff-btn[data-difficulty]` clicks → update `activeDifficulty`, call `applyFilters()`
Wire `#searchInput` input event → update `searchQuery`, call `applyFilters()`

```js
function applyFilters() {
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
  document.getElementById('roadCount').textContent = filtered.length;
  buildRoadGrid(filtered.map(m => m.roadData));
  if (filtered.length > 0) {
    map.fitBounds(L.featureGroup(filtered).getBounds().pad(0.15), { maxZoom: 10 });
  }
}
```

### 7. Road Grid (`buildRoadGrid(roads)`)
Build card HTML for each road:
- Optional image at top (full bleed, 160px tall, scales on hover)
- Card header: road name + county (small muted) + difficulty badge (right-aligned)
- Description (2-line clamp)
- Footer: region (in country color), distance, elevation

Cards are clickable — `showRoadPanel(roadId)` then smooth scroll to `#map-section`.

Call `buildRoadGrid()` initially with all roads.

### 8. Utility listeners
- `#scrollToMap` button → smooth scroll to `#map-section`
- `IntersectionObserver` on `#map` div → call `map.invalidateSize()` when it enters viewport (fixes Leaflet sizing in hidden elements)
- Window scroll → add/remove `box-shadow` on `#header` when `scrollY > 10`

---

## CSS Components to Include

**Header**: sticky, `z-index: 1000`, `backdrop-filter: blur(16px)`, `background: oklch(from var(--color-bg) l c h / 0.92)`

**Hero**: `min-height: 50vh`, centered flex column, radial gradient background with primary and scotland color tints, subtle `::before` repeating grid line overlay at 15% opacity

**Map wrapper**: flex row, `border-radius: var(--radius-xl)`, `overflow: hidden`, `border`, `box-shadow: var(--shadow-lg)`

**Road panel**: `width: 360px`, slide in/out using `width: 0` + `overflow: hidden` when `.collapsed`; scrollable body

**Custom markers**: 32×32px circles, `border: 2px solid #fff`, numbered, color by region (`.scotland`, `.wales`, `.england`)

**Leaflet overrides**: make popups, zoom controls, and attribution use theme variables

**Road cards**: hover lifts with `translateY(-2px)` and shows primary border; image zooms with `scale(1.03)`

**Difficulty badges**: pill shape, background at 15% opacity of the difficulty color using `oklch(from var(--color-X) l c h / 0.15)`

**Mobile breakpoint (max-width: 900px)**:
- Hide `.header-nav`
- Stack `.map-wrapper` vertically (column)
- `#map` height 450px
- Road panel becomes full-width with `max-height` collapse instead of `width` collapse
- Road grid becomes 1-column

---

## Key Implementation Notes

1. The `data-theme` attribute on `<html>` drives all theme switching; CSS vars do the rest.
2. `window.map` and `window.currentTileLayer` are exposed globally so the theme toggle can swap tiles.
3. `window.showRoadPanel` must be global because Leaflet popup content uses inline `onclick`.
4. The road count stat (`#roadCount`) updates live as filters change.
5. `map.invalidateSize()` is essential — the map is rendered before it's fully visible, so size must be recalculated on scroll.
6. Image URLs use Wikimedia Commons `Special:FilePath` redirect — they may not all resolve but the `loading="lazy"` attribute prevents blocking.
7. No `<script type="module">` — everything is in the global scope to keep it simple.
