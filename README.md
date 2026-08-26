# helplito.org

[Português (Brasil)](README.pt-BR.md)

Bilingual public-interest website for Help Lito, an independent initiative that connects researchers, physicians, clinical trial teams and institutions working on prion disease with the official team of Lito Sousa, who was diagnosed with Creutzfeldt-Jakob Disease in August 2026.

The site is not a fundraising campaign. It has no donation, payment or crowdfunding features, and none should be added.

Live site: https://helplito.org

## Documents

- [CONTRIBUTING.md](CONTRIBUTING.md): how to propose code, content, translation and data changes.
- [CLAIMS.md](CLAIMS.md): corrections, removals, ownership and handover requests from Lito, his family, his official team or any person or institution mentioned on the site.
- [FEEDBACK.md](FEEDBACK.md): how to report a bug, a wrong translation or a usability problem, and what to expect.

Each document has a Portuguese version with the `.pt-BR.md` suffix.

## Stack

- Next.js 16 (App Router, Turbopack, React Compiler)
- TypeScript
- Tailwind CSS 4
- next-intl for `/en` and `/pt-br` routing with browser language detection
- Georgia (system serif) for headings, `next/font` with IBM Plex Sans (body) and IBM Plex Mono (labels)

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. The proxy redirects `/` to `/en` or `/pt-br` based on `Accept-Language`.

```bash
pnpm lint
pnpm build
pnpm start
```

Copy `.env.example` to `.env.local` for development. It sets `NEXT_PUBLIC_SITE_URL=http://localhost:3000`, which drives `metadataBase`, canonical and hreflang URLs, the sitemap and robots. `.env.production` is committed and sets `https://helplito.org` for production builds, including Vercel. No other variable is required for a local build.

Next.js loads `.env.local` ahead of `.env.production`, also during `pnpm build`. A local production build therefore bakes in the localhost URL; that is fine for the QA sweep. To reproduce the deployed URLs locally, run `NEXT_PUBLIC_SITE_URL=https://helplito.org pnpm build`.

### QA sweep

`scripts/qa-sweep.mjs` drives a headless Chromium (Playwright) through every route in both locales across twelve viewport widths, from 320px to 1920px. It fails on horizontal overflow, console errors, failed requests, broken images, heading level skips, unnamed controls, broken internal links or anchors, language switching that loses the route, a mobile menu that does not close on Escape, and form validation regressions.

```bash
pnpm dlx playwright install chromium   # once
pnpm build && pnpm start               # in one terminal
pnpm qa                                # in another; BASE and WIDTHS can be overridden
```

The form check stops at the review step and blocks every request that does not go to the server under test. It never opens the mailto link and never sends anything to the contact addresses.

### Social sharing images

The Open Graph and social preview images are static files in `public/og/`, referenced from `src/lib/social-images.ts`. They are captured from the development-only templates at `/dev/og/[variant]`, one intentional composition per aspect ratio. To regenerate after changing `src/components/og/SocialCard.tsx`:

```bash
pnpm dev   # in one terminal
pnpm og    # in another; writes both files into public/og/
```

`public/og/README.md` documents each file and where it is used.

## Project layout

```
src/
  app/[locale]/          pages and layout
  app/dev/og/            social image templates (404 in production)
  components/og/         social card layouts, one per aspect ratio
  app/api/submissions/   optional moderated submission endpoint
  components/home/       homepage narrative sections, in order
  components/research/   trial card, organization cards, research areas
  components/help/       structured "Can You Help?" form
  components/visuals/    prion diagram
  config/site.ts         official channels, initiative contact, repository URL, submission mode
  data/                  structured content: organizations, trials, research areas, sources, timeline
  i18n/                  routing, navigation, request config
  messages/              en.json and pt-br.json
  lib/                   fonts, metadata, submission helpers, utils
  proxy.ts               next-intl locale middleware
scripts/
  qa-sweep.mjs           browser QA sweep (see above)
  generate-og.mjs        captures the social sharing images into public/og/
```

## Content rules encoded in the data layer

- `src/data/trials.ts`: every trial carries `status` and `lastVerified`, with separate fields for registry, sponsor operations, site operations, Lito's case, expanded access and regulatory boundaries. Never collapse these into one recruitment label. Update `lastVerified` whenever a human checks the record.
- `src/data/organizations.ts`: each entry needs an official URL and a `lastVerified` date. Listing does not imply endorsement.
- `src/data/sources.ts`: every medical or research claim on the site should trace back to an entry here.
- `src/data/timeline.ts`: public information only, month-level precision.

Types live in `src/data/types.ts`. The `Localized` type holds one string per locale, so data files stay bilingual without touching the message files.

## Contact channels

Two channels exist and must never be confused. Both live in `src/config/site.ts`.

- `officialEmail` (ajudalito@avioesemusicas.com): Lito's official team. Scientific, clinical and institutional information.
- `initiativeEmail` (helplito@brunosilva.io): the person responsible for this website. Corrections, removals, legal matters, ownership and operational questions.

`NEXT_PUBLIC_REPOSITORY_URL` enables the source code link on the About page and footer. Set it to `https://github.com/brunos3d/helplito.org` in the hosting environment.

## The "Can You Help?" form

`NEXT_PUBLIC_SUBMISSION_MODE` controls delivery (see `.env.example`):

- `mailto` (default): the form builds a plain-text message, shows it for review, then opens the sender's email client addressed to the official team. Nothing is sent to or stored by this project.
- `moderated`: the form posts to `/api/submissions`, which validates the payload and forwards it to `SUBMISSION_WEBHOOK_URL` (optionally with `SUBMISSION_WEBHOOK_TOKEN` as a bearer token). The route stores nothing. Without the webhook configured, it responds 503.

Submissions are never published. There is no forum, no comments and no public directory.

## Adding a language

1. Add the locale to `locales` in `src/i18n/routing.ts` and to `htmlLang` and `ogLocale`.
2. Create `src/messages/<locale>.json`.
3. Add the locale key to every `Localized` value in `src/data/*.ts`.
4. Add a label in `src/components/layout/LanguageSwitcher.tsx`.

## Images

`public/lito.jpg` is the hero portrait. `lito-airbus.jpg` is used in the "Who is Lito" section, `lito-and-wife.jpg` in the family section, and `lito-hospitalized.jpg` only after the visitor has met Lito, in the "Why time matters" section. Keep that order.

The photographs show real people and were taken from material Lito's family and team shared publicly. They are included for identification only. Anyone shown in them can ask for removal through [CLAIMS.md](CLAIMS.md).

## Responsibility

This website is created and maintained by Bruno Silva, independently and at his own expense. It is not operated by Lito, his family, Aviões e Músicas or any institution mentioned on the site. Questions about the initiative go to helplito@brunosilva.io.
