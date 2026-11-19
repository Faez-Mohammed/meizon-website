# MEIZON website

Frontend-only marketing site (Next.js App Router, React, TypeScript, Tailwind CSS, Lucide). All content is hardcoded in `src/data`. No backend, database or API.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- `src/app` routes: `/`, `/services`, `/services/[slug]`, `/products`, `/products/[slug]`, `/contact` (Contact + Careers tabs)
- `src/components/layout` navbar, footer, chat button
- `src/components/sections` page sections (hero, device preview, services, products, about, testimonials, quote form)
- `src/components/ui` logo, buttons, reveal animation, background, SVG illustrations
- `src/data` services, products, testimonials, stats, nav
- `public` logo SVGs (`meizon-logo.svg` for dark backgrounds, `meizon-logo-dark.svg` for light) and OG image
