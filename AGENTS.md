# AGENTS.md — 3D Folio

## Dev commands
```bash
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # Output to dist/
npm run preview  # Preview production build
```
No test, lint, typecheck, or format scripts exist. Install any tooling if needed.

## Stack
- **React 18** + **Vite 4** + **Tailwind CSS 3** (JIT mode set in `tailwind.config.cjs` via `mode: "jit"`)
- **Three.js** via `@react-three/fiber` / `@react-three/drei` / `@react-three/rapier`
- **Language:** JavaScript (JSX) — no TypeScript, despite `@types/react` in devDeps
- **Package manager:** npm

## Entry points
| File | Role |
|---|---|
| `index.html` | HTML shell (root), loads `src/main.jsx` |
| `src/main.jsx` | JS entry, renders `<App />` |
| `src/App.jsx` | Defines routes: `/` (full homepage) and `/projects` (ProjectsPage) |
| `src/index.css` | Tailwind directives + custom animations (Poppins font, `color-scheme: dark`, gradient/glow utility classes) |

## Important directories
- `src/components/` — all React components (section components + `canvas/` for 3D scenes)
- `src/components/canvas/` — Three.js canvas components (`Computers.jsx`, `Earth.jsx`, `Ball.jsx`, `Stars.jsx`)
- `src/components/ProjectCard.jsx` — reusable card component (also supports optional `website_link` for live-demo globe icon)
- `src/components/Lanyard/` — alternative physics-based hero (unused, dead code)
- `src/constants/index.js` — all content data (nav, services, tech, experience, testimonials, projects). Projects shape: `{ name, description, tags: [{name, color}], image, source_code_link, website_link }`
- `src/hoc/SectionWrapper.jsx` — HOC that wraps sections with `staggerContainer` + scroll-triggered animations
- `src/utils/motion.js` — framer-motion variants (`fadeIn`, `slideIn`, `zoomIn`, `staggerContainer`)
- `public/` — static 3D models (`desktop_pc/`, `planet/`) + logos
- `src/assets/` — imported assets (icons, lanyard model/texture)
- `tailwind.config.cjs` — custom colors (`primary`, `secondary`, `tertiary`), `hero-pattern` bg image, custom `xs` breakpoint (450px)

## Quirks & conventions

- **React Router** is used. The home page (`/`) is a single page with hash anchors (`#about`, `#work`, `#contact`). Navigation links in `Navbar.jsx` use `<a href={`#${nav.id}`}>`. The `/projects` route renders `ProjectsPage.jsx`.
- `@emailjs/browser` is installed and imported in `Contact.jsx` but **not used** for sending — the form uses `window.location.href = \`mailto:...\`` instead. No `.env` is needed.
- `HeroWithLanyard` is imported in `App.jsx` but **not rendered** in the JSX tree — dead code unless activated.
- `card.glb` exists in both `src/assets/lanyard/` (imported by code) and `public/lanyard/` (served statically). The code imports from `src/assets/lanyard/card.glb`.
- `.npmrc` has `legacy-peer-deps=true` — use `npm ci` or `npm install` as normal.
- `vite.config.js` sets `host: '0.0.0.0'`, `allowedHosts: true` (LAN-accessible dev server), and `assetsInclude: ['**/*.glb']`.
- `src/index.css` sets `color-scheme: dark` globally and defines `.hash-span` (negative margin for scroll anchor offset).
