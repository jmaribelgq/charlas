# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static HTML5 site** for NeuroEduca — a neuroscience-based educational service in Guatemala. The site is a growing collection of landing pages, one per talk (charla). There is no build system, no framework, and no dependencies — changes to HTML/CSS take effect immediately and are published via GitHub Pages.

**Vision:** Every new talk gets its own self-contained folder under `charlas/year/talk-slug/`. Over time this becomes a catalog of talk pages, each independently shareable and linkable.

## Repository Structure

```
charlas/
  2026/
    poder-mama/             ← first talk; use as template for new ones
      index.html            ← fully self-contained page (HTML + CSS + JS inline)
      README.md             ← talk-specific notes
      img/                  ← all images for this talk live here
        logo-neuroeduca.jpg
        maribel.png
        cerebro-infantil.jpg
        madre-hijo.jpg
```

**Critical constraint:** All `<img src="...">` and CSS `url('...')` references inside `index.html` use paths relative to the HTML file (e.g., `img/logo-neuroeduca.jpg`). If the folder is moved or renamed, all image paths break.

## Adding a New Talk

Copy an existing talk folder, rename it, then edit `index.html` and replace images in `img/`. The slug should be lowercase, hyphen-separated, no accents (e.g., `liderazgo-femenino-2026`).

Checklist when creating a new talk page:
- Update `<title>` and `<meta name="description">`
- Update all section text (hero, beneficios, objetivos, credenciales)
- Update the WhatsApp `?text=` URL parameter in every `href="https://wa.me/..."` link
- Replace images in `img/` and update any `src=` or `url('...')` references if filenames changed
- The logo, speaker photo, and brand assets (`logo-neuroeduca.jpg`, `maribel.png`) are shared across all talks — copy the same files into each `img/` folder

## Architecture of index.html

Each landing page is a single self-contained HTML file with:

- **`<style>` block** — all CSS inline (no external stylesheet), using CSS custom properties for the color system
- **`<script>` block** — minimal vanilla JS at the bottom (no framework)
- **Google Fonts** — loaded from CDN (`Bebas Neue` for headings, `Roboto` for body)

### Section layout (in DOM order)

`nav` → `hero` → `importancia` → `beneficios` → `objetivos` → `credenciales` → `modalidad` → `cta-final` → `footer` + floating WhatsApp button

### Color system (CSS variables)

Purple/lilac palette defined in `:root`:
- `--lila-50` through `--lila-900` — main brand colors
- `--rosa-acento: #F4A1C7` — pink accent for CTAs and highlights
- `--blanco: #FFFFFF`, `--texto-oscuro: #1A1A2E`

### Responsive breakpoints

- `@media (max-width: 900px)` — tablet adjustments
- `@media (max-width: 500px)` — mobile adjustments
- Typography uses `clamp()` for fluid sizing throughout

### WhatsApp integration pattern

All CTAs link to WhatsApp using the `wa.me` format with a pre-composed URL-encoded message:

```html
<a href="https://wa.me/50247655788?text=Hola%2C%20me%20interesa...">
```

The phone number `50247655788` and the pre-composed message text appear in nav, hero, credentials, CTA section, footer, and the floating button — update all occurrences when creating a new talk.

## Deployment

The site is published via **GitHub Pages** from the `main` branch root. No build step needed. After `git push`, GitHub Pages updates within ~60 seconds.

Each talk's public URL follows this pattern:
`https://[custom-domain]/charlas/2026/poder-mama/`

Custom domain is configured in GitHub → Settings → Pages → Custom domain. A `CNAME` DNS record pointing to `[github-user].github.io` must also be set at the domain registrar.
