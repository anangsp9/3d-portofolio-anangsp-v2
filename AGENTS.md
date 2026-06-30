# AGENTS.md — 3D Folio

## Dev commands
```bash
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # Output to dist/
npm run preview  # Preview production build
```
No test, lint, typecheck, or format scripts exist. Install any tooling if needed.

## Known quirks

- **React Router** is used. The home page (`/`) is a single page with hash anchors (`#about`, `#work`, `#contact`). There is also a `/projects` route (from the "See All" button in `Works.jsx`) that shows all projects in a full grid.
- `@emailjs/browser` is installed but **not used**. The contact form uses a `mailto:` link instead. No `.env` is needed.
- `HeroWithLanyard` (physics-based lanyard hero) is imported in `App.jsx` but **not rendered** in the JSX tree — it's dead code unless activated.
- `card.glb` exists in both `src/assets/lanyard/` (imported by code) and `public/lanyard/` (served statically). The code imports from `src/assets/lanyard/card.glb`.
- `.npmrc` has `legacy-peer-deps=true` — use `npm ci` or `npm install` as normal; this flag is already set.
- `vite.config.js` has `host: '0.0.0.0'` and `allowedHosts: true` — dev server is accessible from LAN devices (e.g., phone testing).

## Stack
- **React 18** + **Vite 4** + **Tailwind CSS 3** (JIT mode, `mode: "jit"`)
- **Three.js** via `@react-three/fiber` / `@react-three/drei` / `@react-three/rapier`
- **Language:** JavaScript (JSX) — no TypeScript, despite `@types/react` in devDeps
- **Package manager:** npm

## Entry points
| File | Role |
|---|---|
| `index.html` | HTML shell (root), loads `src/main.jsx` |
| `src/main.jsx` | JS entry, renders `<App />` |
| `src/App.jsx` | Defines routes: `/` (full homepage) and `/projects` (ProjectsPage) |
| `src/index.css` | Tailwind directives + custom animations |

## Important directories
- `src/components/` — all React components (section components + `canvas/` for 3D scenes)
- `src/components/canvas/` — Three.js canvas components (`Computers.jsx`, `Earth.jsx`, `Ball.jsx`, `Stars.jsx`)
- `src/components/ProjectCard.jsx` — reusable card component used by both `Works.jsx` and `ProjectsPage.jsx`
- `src/components/Lanyard/` — alternative physics-based hero (unused)
- `src/constants/index.js` — all content data (nav, services, tech, experience, testimonials, projects). Projects shape: `{ name, description, tags: [{name, color}], image, source_code_link }`
- `src/hoc/SectionWrapper.jsx` — motion wrapper for staggered fade-in animations
- `src/utils/motion.js` — framer-motion variants (`fadeIn`, `slideIn`, `zoomIn`, etc.)
- `public/` — static 3D models (`desktop_pc/`, `planet/`) + logos
- `src/assets/` — imported assets (icons, lanyard model/texture)
