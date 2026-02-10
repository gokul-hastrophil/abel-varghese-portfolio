# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (vite build)
npm run preview  # Preview production build locally
```

No test runner or linter is configured.

## Architecture

This is a **single-page React portfolio site** built with Vite + TypeScript + Tailwind CSS. There is no router — navigation uses anchor links (`#about`, `#research`, `#publications`, `#education`, `#experience`, `#books`, `#gallery`, `#courses`).

### Key files

- **`App.tsx`** — Monolithic component that renders all page sections inline. Most sections are not extracted into separate components; they render data from constants using `.map()`.
- **`constants.tsx`** — All portfolio content (education, experience, publications, projects, books, courses). This is where content updates happen.
- **`types.ts`** — TypeScript interfaces for each content type (`Publication`, `Project`, `EducationEntry`, `ExperienceEntry`, `Book`, `Course`, `NewsItem`, `Certification`).
- **`components/`** — Only three extracted components: `Navbar.tsx`, `Hero.tsx`, `Footer.tsx`.
- **`index.tsx`** — React root entry point.
- **`index.html`** — Contains SEO meta tags, OpenGraph tags, JSON-LD structured data, and Google Fonts (Montserrat, Poppins).

### Styling

Tailwind CSS with custom theme extensions in `tailwind.config.js`:
- **Colors**: `primary` (#004d40), `primaryHover` (#003d33), `accent` (#10b981), `bgLight`, `footerBg` (#122620)
- **Fonts**: Poppins (default sans), Montserrat (headings via `font-montserrat`)
- Colors are also defined as a `COLORS` object in `constants.tsx` and used inline via `style={{ color: COLORS.primary }}`

### Path alias

`@/*` maps to project root (configured in both `tsconfig.json` and `vite.config.ts`).

### Static assets

All in `public/assets/` — logos in `logos/`, project images in `projects/`, profile photos and hero background in `misc/`.

## Patterns to Follow

- Content changes go in `constants.tsx`; add corresponding interfaces in `types.ts` first
- New sections are added directly in `App.tsx` following the existing pattern: `<section id="anchor-name">` with alternating `bg-white`/`bg-gray-50`
- Section headings use a consistent two-line pattern: small uppercase tracking-widest subtitle + large font-black font-montserrat title
- External links always use `target="_blank" rel="noopener noreferrer"`
- Vercel Analytics is included via `<Analytics />` in `App.tsx`
