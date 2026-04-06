published: https://dbeale.github.io/dnb-drive/

# DNB Drive — UK's Greatest Driving Roads

An interactive web application showcasing 20 of the UK's most exhilarating driving roads for sports car enthusiasts. Explore legendary routes across England, Scotland, and Wales through a dynamic map interface with detailed road information, real-time filtering, and a beautiful dark/light theme.

## Features

- **Interactive Map** — Leaflet-powered map with custom markers for all 20 roads
- **Road Detail Panel** — Click any marker or card to see distance, elevation, difficulty, highlights, and a local driving tip
- **Search & Filter** — Filter roads by region (Scotland / Wales / England) and difficulty (Thrilling / Challenging / Scenic), plus a real-time text search
- **Dark & Light Theme** — Toggle between a dark and a light theme; the map tiles update automatically
- **Responsive Design** — Fully usable on desktop and mobile devices
- **No Build Step** — Pure HTML, CSS, and JavaScript with CDN dependencies; open `index.html` and go

## Roads at a Glance

| Stat | Value |
|------|-------|
| Total roads | 20 |
| Countries | England · Scotland · Wales |
| Total curated distance | 800+ miles |
| Difficulty ratings | Thrilling · Challenging · Scenic |

Highlights include:

- 🏴󠁧󠁢󠁳󠁣󠁴󠁿 **Scotland** — Bealach na Bà, North Coast 500, Rest and Be Thankful, and more
- 🏴󠁧󠁢󠁷󠁬󠁳󠁿 **Wales** — Black Mountain Pass (A4069), Evo Triangle (B4391), Horseshoe Pass, and more
- 🏴󠁧󠁢󠁥󠁮󠁧󠁿 **England** — Hardknott Pass, Snake Pass, Cat and Fiddle, and more

## Getting Started

No build tools or package managers are required. Every dependency is loaded via CDN.

### Run Locally

**Option 1 — Open directly in a browser:**

```
open index.html
```

**Option 2 — Serve with Python:**

```bash
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

**Option 3 — Serve with Node.js:**

```bash
npx http-server
# then open http://localhost:8080 in your browser
```

## Project Structure

```
dnb-drive/
├── index.html       # Application shell — HTML structure and CDN imports
├── app.js           # All interactive logic (map, markers, filters, theme)
├── roads-data.js    # Dataset of 20 roads (coordinates, descriptions, highlights)
├── style.css        # Main stylesheet (design tokens, components, responsive layout)
└── base.css         # CSS reset and accessibility foundations
```

### Key Source Files

| File | Purpose |
|------|---------|
| `index.html` | Header, hero, map container, road grid, and footer |
| `app.js` | Map initialisation, marker creation, panel display, filter logic, theme toggle |
| `roads-data.js` | `ROADS_DATA` global array — one object per road with coordinates, metadata, and copy |
| `style.css` | Design tokens (color, spacing, type), dark/light themes, all UI components |
| `base.css` | Box-model reset, focus styles, reduced-motion support, `.sr-only` utility |

## Technology Stack

| Library / Service | Version | Usage |
|-------------------|---------|-------|
| [Leaflet.js](https://leafletjs.com/) | 1.9.4 | Interactive map and markers |
| [CARTO Basemaps](https://carto.com/basemaps/) | — | Map tile layers (dark & light) |
| [Lucide Icons](https://lucide.dev/) | latest | SVG icons throughout the UI |
| [Fontshare](https://www.fontshare.com/) | — | Clash Display & General Sans typefaces |

## Deployment

The application is a static site and can be deployed to any static hosting service:

- **GitHub Pages** — push to a `gh-pages` branch or enable Pages from the repository settings
- **Netlify / Vercel** — drag and drop the project folder or connect the repository
- **Any web server** — copy all five files to your document root

## Browser Support

Requires a modern browser with support for ES6+ and CSS custom properties (all evergreen browsers).

## License

This project was generated with [Perplexity Computer](https://www.perplexity.ai/).
