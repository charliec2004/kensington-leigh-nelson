# Kensington Leigh Nelson

Personal brand page for Kensington Leigh Nelson, built as a polished professional profile for a Chapman University business graduate interested in finance and wealth management.

This site was created as a personal project for my girlfriend. Keep the tone respectful, accurate, and professional.

## Tech Stack

- Next.js app router
- React
- TypeScript
- Static export for GitHub Pages
- pnpm

## Local Development

Install dependencies:

```bash
pnpm install
```

Run the local dev server:

```bash
pnpm dev
```

Run lint:

```bash
pnpm lint
```

Build the static site:

```bash
pnpm build
```

Build with the GitHub Pages base path:

```bash
GITHUB_PAGES=true pnpm build
```

## Open Graph Image

The preview image is generated from `scripts/generate-og-image.mjs` and written to `public/og-image.jpg`.

Regenerate it after layout, portrait, or text changes:

```bash
pnpm generate:og
```

## Deployment

The site deploys to GitHub Pages through `.github/workflows/pages.yml`.

Pushing to `main` triggers:

1. dependency install with pnpm
2. static build with `GITHUB_PAGES=true`
3. upload of the `out` directory
4. GitHub Pages deployment

Production URL:

https://charliec2004.github.io/kensington-leigh-nelson/

## Project Notes

- `next.config.ts` sets `output: "export"` for static hosting.
- GitHub Pages uses the `/kensington-leigh-nelson` base path.
- Public assets should live in `public/`.
- Design direction is documented in `DESIGN.md`.
