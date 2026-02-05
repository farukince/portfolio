## React + TypeScript Portfolio

This project reimplements the provided static HTML pages (Home, Projects, Experience, Education & Skills) as a clean single-page React application. Tailwind CSS keeps the styling aligned with the original look.

### Highlights
- **React + TypeScript + Vite** for a fast, typed development experience.
- **React Router** powering `/`, `/projects`, `/experience`, and `/education-skills`.
- **Tailwind CSS** preserves existing utility classes for consistency.
- **Material Symbols** loaded via Google Fonts for icons.
- **Component-driven layout** with data-driven cards, timelines, and lists for easier updates.

---

## Getting Started

Prerequisites:
- Node.js 18+
- npm (or pnpm/yarn)

Install and launch locally:

```bash
npm install
npm run dev
```

Build and preview production output:

```bash
npm run build
npm run preview
```

---

## Project Structure

```text
react-portfolio/
  ├─ index.html                      # Vite entry (Inter + Material Symbols)
  ├─ package.json                    # Scripts + dependencies
  ├─ tsconfig.json                   # TypeScript config
  ├─ vite.config.ts                  # Vite config
  ├─ postcss.config.js               # PostCSS/Tailwind
  ├─ tailwind.config.ts              # Theme overrides (colors, radius, fonts)
  └─ src/
     ├─ main.tsx                     # Router + root render
     ├─ App.tsx                      # Layout wrapper (Navbar + Outlet + Footer)
     ├─ components/
     │  └─ Navbar.tsx                # Shared navigation
     ├─ pages/
     │  ├─ Home.tsx                  # Hero + stats strip
     │  ├─ Projects.tsx              # Projects grid (data-driven)
     │  ├─ Experience.tsx            # Timeline
     │  └─ EducationSkills.tsx        # Education + skills layout
     └─ styles/
        └─ index.css                 # Tailwind directives + helpers
```

---

## Content Mapping

- **Home (`/`)**: Hero section and footer strip from the original `index.html`.
- **Projects (`/projects`)**: Avatar hero, search field, tags, and the six-card grid rendered from the `projects` array in `Projects.tsx`.
- **Experience (`/experience`)**: Timeline entries rendered from the `experiences` array in `Experience.tsx`.
- **Education & Skills (`/education-skills`)**: Two-column layout matching `education-skills.html`, combining static blocks and mapped arrays.

The original markup is preserved where possible; helper adjustments include `class` → `className`, inline styles → objects, and centralized data arrays for projects, experiences, and skills.

---

## Styling

- The Tailwind theme in `tailwind.config.ts` extends the original palette:
  - `primary`, `background-light`, `background-dark`, `surface-light`, `surface-dark`
  - `fontFamily.display/sans`: Inter
  - `borderRadius`: `DEFAULT`, `lg`, `xl`, `full`
- The `<html>` tag defaults to `class="dark"` inside `index.html`, so the site loads in dark mode. Remove the class or add a toggle to switch to light mode if needed.

---

## Deployment

- Deploy on any Vite-compatible host (Vercel, Netlify, etc.):
  - Build: `npm run build`
  - Output directory: `dist/`
  - Framework: Vite
- GitHub Pages can be configured with `gh-pages` if required.

