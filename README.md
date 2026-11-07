# helplito.org

[Português (Brasil)](README.pt-BR.md)

Bilingual memorial website for Lito Sousa (25 January 1967 to 1 October 2026), aviation educator and creator of Aviões e Músicas. Help Lito started in August 2026 as an independent initiative to connect prion disease researchers with Lito's official team after his Creutzfeldt-Jakob Disease diagnosis. After his death, the site became a memorial: his story, links to his YouTube channel, and a public record of prion disease research for the professionals who keep working on it.

The site is not a fundraising campaign. It has no donation, payment or crowdfunding features, and none should be added.

Live site: https://helplito.org

The domain was registered on 23 August 2026 for one year. The site goes offline when it expires on 23 August 2027.

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
  components/home/       homepage narrative sections, in order
  components/research/   trial card, organization cards, research areas
  components/visuals/    prion diagram
  config/site.ts         official channels, initiative contact, repository URL
  data/                  structured content: organizations, trials, research areas, sources, timeline
  i18n/                  routing, navigation, request config
  messages/              en.json and pt-br.json
  lib/                   fonts, metadata, utils
  proxy.ts               next-intl locale middleware
scripts/
  qa-sweep.mjs           browser QA sweep (see above)
  generate-og.mjs        captures the social sharing images into public/og/
```

## Content rules encoded in the data layer

- `src/data/trials.ts`: every trial carries `status` and `lastVerified`. The UI renders both and links to the official registry. Never treat recruitment status as a permanent fact. Update `lastVerified` whenever a human checks the record.
- `src/data/organizations.ts`: each entry needs an official URL and a `lastVerified` date. Listing does not imply endorsement.
- `src/data/sources.ts`: every medical or research claim on the site should trace back to an entry here.
- `src/data/timeline.ts`: the post-mortem timeline shown on the homepage. Each entry is tagged `lito` (his life and illness) or `project` (this initiative), down to the domain expiry on 23 August 2027. Public information only.

Types live in `src/data/types.ts`. The `Localized` type holds one string per locale, so data files stay bilingual without touching the message files.

## Contact channels

Two channels exist and must never be confused. Both live in `src/config/site.ts`.

The email Lito's team published during his illness (ajudalito@avioesemusicas.com) was created for his case. It is intentionally no longer listed anywhere on the site.

- `officialInstagram` and `avioesEMusicas` (site and YouTube): Lito's official channels, maintained by his team.
- `initiativeEmail` (helplito@brunosilva.io): the person responsible for this website. Corrections, removals, legal matters, ownership and operational questions.

`NEXT_PUBLIC_REPOSITORY_URL` enables the source code link on the About page and footer. Set it to `https://github.com/brunos3d/helplito.org` in the hosting environment.

## The former "Can You Help?" form

Until October 2026, `/can-you-help` hosted a structured form that prepared an email to Lito's team. It was removed together with the `/api/submissions` route after his death. The route now serves the "For researchers" page, which points to the organization directory and the research page. The path stays the same so existing links keep working.

## Adding a language

1. Add the locale to `locales` in `src/i18n/routing.ts` and to `htmlLang` and `ogLocale`.
2. Create `src/messages/<locale>.json`.
3. Add the locale key to every `Localized` value in `src/data/*.ts`.
4. Add a label in `src/components/layout/LanguageSwitcher.tsx`.

## Images

All photographs render in black and white and fade to color on hover, focus or touch (`src/components/ui/Figure.tsx`); the social cards use the same treatment. `public/lito.jpg` is the memorial portrait, used in the hero and in the social cards. `lito-airbus.jpg` is used in the "Who Lito was" section and on the About Lito page, and `lito-and-wife.jpg` in the family section. The hospital photo was removed when the site became a memorial; prefer photos that show Lito as people remember him.

The photographs show real people and were taken from material Lito's family and team shared publicly. They are included for identification only. Anyone shown in them can ask for removal through [CLAIMS.md](CLAIMS.md).

## Responsibility

This website is created and maintained by Bruno Silva, independently and at his own expense. It is not operated by Lito, his family, Aviões e Músicas or any institution mentioned on the site. Questions about the initiative go to helplito@brunosilva.io.
