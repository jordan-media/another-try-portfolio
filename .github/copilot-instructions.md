# Copilot Instructions for ws2-wk10-start

## Project Overview
- This is a React single-page application (SPA) scaffolded with Vite for fast development and HMR.
- The main entry point is `src/main.jsx`, which loads the root `App.jsx` component.
- Routing and navigation are handled via `react-router-dom` (see `App.jsx` and components in `src/components/`).
- Project data is loaded from `public/projects.json` and displayed on the homepage and project detail views.

## Key Components & Structure
- `src/components/` contains all major UI components:
  - `Home.jsx`: Main landing page, features GSAP scroll animations and loads featured projects.
  - `ProjectDetail.jsx`: Displays details for a single project.
  - `Header.jsx`, `Layout.jsx`, `About.jsx`, `Error.jsx`: Shared layout and utility components.
- Styling is managed via CSS files (e.g., `Home.css`). Inline styles are discouraged; use CSS modules or external stylesheets.

## Data Flow & Patterns
- Project data is fetched from `/projects.json` using the Fetch API in React hooks (`useEffect`).
- Featured projects are filtered by specific IDs in `Home.jsx`.
- GSAP and ScrollTrigger are used for scroll-based animations (see `Home.jsx`).
- Use React refs for DOM manipulation with GSAP.

## Developer Workflows
- **Start Dev Server:**
  ```sh
  npm run dev
  ```
- **Build for Production:**
  ```sh
  npm run build
  ```
- **Preview Production Build:**
  ```sh
  npm run preview
  ```
- **Lint:**
  ```sh
  npm run lint
  ```
- No test framework is present by default; add tests as needed.

## Conventions & Integration Points
- Use named exports for components.
- Use React Router `<Link>` for navigation.
- External dependencies: `gsap`, `@gsap/react`, `react-router-dom`.
- All static assets (images, JSON) should be placed in `public/`.
- Avoid direct DOM manipulation outside of GSAP/refs.

## Example Patterns
- **GSAP Scroll Animation:** See `Home.jsx` for how to pin and animate sections on scroll.
- **Project List Rendering:**
  ```jsx
  {projects.map(project => (
    <Link to={`/projects/${project.id}`}>{project.name}</Link>
  ))}
  ```
- **Fetching Data:**
  ```js
  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(setProjects);
  }, []);
  ```

## Key Files
- `src/components/Home.jsx`, `src/components/ProjectDetail.jsx`, `public/projects.json`, `vite.config.js`, `eslint.config.js`

---
If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.
