# AGENTS.md

## Project Context

This repository is a personal brand page for Kensington Leigh Nelson. It was built by the repo owner as a personal project for his girlfriend.

Treat the subject and content with care. Copy should be accurate, polished, respectful, and professional. Do not add jokes, speculation, private details, or overly salesy language.

## Priorities

1. Security
2. Correctness
3. Clarity

## Implementation Rules

- Follow the existing Next.js app-router structure.
- Keep the site statically exportable for GitHub Pages.
- Preserve `GITHUB_PAGES=true` support and the `/kensington-leigh-nelson` base path.
- Keep images and public assets under `public/`.
- Use `pnpm` for scripts and dependency management.
- Avoid adding new dependencies unless they clearly reduce complexity.
- Keep UI changes aligned with `DESIGN.md`: refined, minimal, professional, and restrained.

## Content Rules

- This is a professional personal brand page, not a generic marketing site.
- Keep the voice concise, warm, and credible.
- Do not invent credentials, employment details, dates, schools, or accomplishments.
- Make assumptions explicit when content is missing.
- Ask before changing biographical claims or adding personal information.

## Security Baseline

- Never hardcode secrets. Use environment variables or secret managers.
- Treat all external input as untrusted.
- Validate type, shape, length, and format where user input or external data is introduced.
- Do not log secrets, tokens, or sensitive data.
- Do not expose internal errors, stack traces, or system details in user-facing output.
- Use explicit allowlists for cross-origin or cross-boundary access.
- Never use wildcard CORS.

## Verification

Before finishing code or content changes, run the relevant checks:

```bash
pnpm lint
```

For static export or deployment-sensitive changes, also run:

```bash
GITHUB_PAGES=true pnpm build
```

For Open Graph image changes, regenerate the image:

```bash
pnpm generate:og
```
