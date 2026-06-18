# Portfolio — Cyberpunk AI Engineer Terminal

An interactive personal portfolio built as a cyberpunk-themed terminal interface. Features a Three.js animated neural core, scroll-reveal sections, a radar competency chart, and an ambient sound system — all in vanilla React loaded directly from a CDN (no build step).

## Features

- **Boot sequence** — animated terminal startup before content renders
- **Neural core** — Three.js particle swarm + 2D starfield grid that reacts to mouse and scroll
- **Scroll-spy navigation** — active section tracking with smooth scroll
- **Ability bars & radar chart** — animated skill stats across AI/ML, Programming, and AI Governance
- **Projects showcase** — missions section with live project links
- **Ambient SFX** — toggle-able sound effects on navigation

## Tech Stack

| Layer | Tech |
|-------|------|
| UI | React 18 (CDN), vanilla JS |
| 3D | Three.js |
| Styling | Custom CSS (cyberpunk / dark theme) |
| Server | Node.js (`server.js`) for local dev |

## Running Locally

```bash
npm install
node server.js
# Open http://localhost:3000
```

Or open `index.html` directly in a browser (no build required).

## Structure

```
├── index.html        # Entry point — loads React + Three.js from CDN
├── app.jsx           # Root component, boot flow, scroll-spy, nav
├── sections.jsx      # All page sections (hero, dossier, abilities, etc.)
├── hud.jsx           # Heads-up display: navbar, toast, sound toggle
├── neural-core.js    # Three.js agent swarm + 2D starfield canvas
├── sound.js          # Ambient SFX system
├── data.js           # All portfolio content (bio, projects, skills)
└── styles.css        # Full cyberpunk stylesheet
```
