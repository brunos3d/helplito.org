# Contributing

[Português (Brasil)](CONTRIBUTING.pt-BR.md)

Help Lito is a small public-interest site about a real person with a fatal, fast-moving disease. Contributions are welcome, but the bar for accuracy and restraint is higher than on a typical open source project. Read this whole page before opening a pull request.

If you are Lito, a member of his family or his official team, or you represent an institution mentioned on the site, you do not need to go through this process. See [CLAIMS.md](CLAIMS.md).

## What we accept

- Bug fixes, accessibility fixes and performance improvements.
- Corrections to medical, scientific or institutional content, with a citable source.
- Translation fixes for `en` and `pt-br`, and new languages.
- New entries in `src/data/` (organizations, trials, research areas, sources) that meet the rules below.
- Improvements to the QA sweep in `scripts/qa-sweep.mjs`.

## What we do not accept

- Donation, payment, crowdfunding, PIX or cryptocurrency features of any kind. This is a hard rule and will not be discussed in a pull request.
- Analytics, advertising, tracking pixels or third-party embeds.
- Comments, forums, public directories or anything that publishes user submissions.
- Content about Lito's health beyond what his family and team have shared publicly.
- Claims that any treatment works, or that Lito is eligible for, enrolled in, or will receive any therapy.
- Unverified treatments, anecdotal cures, supplements or speculation, even if framed as "just a suggestion".
- Calls to mass-message the institutions listed on the site.

## Before you start

For anything larger than a typo, open an issue first and describe the change. This avoids work that cannot be merged. For content or data changes, include your sources in the issue.

## Setup

```bash
pnpm install
pnpm dev
```

Before opening a pull request:

```bash
pnpm lint
pnpm build
```

For UI changes, also run the QA sweep. It needs a production build running locally:

```bash
pnpm dlx playwright install chromium   # once
pnpm build && pnpm start               # terminal 1
pnpm qa                                # terminal 2
```

The sweep checks every route in both languages across twelve viewport widths. A pull request that breaks it will not be merged.

## Content and data rules

These rules are enforced by review, and some of them by types in `src/data/types.ts`.

### Sources

Every medical or research statement must trace back to an entry in `src/data/sources.ts`. Acceptable sources are public health authorities (WHO, CDC, NHS, Brazilian Ministry of Health and similar), official clinical trial registries (ClinicalTrials.gov, EU CTR, ReBEC), peer-reviewed literature and the official channels of Lito's team. Each entry records an access date. Press articles can support the timeline but not medical claims.

### Clinical trials

Each entry in `src/data/trials.ts` needs `status`, `lastVerified` and a link to the official registry record. Do not copy status from a news article. Open the registry, read the record, set `lastVerified` to the date you did that. When you only refresh `lastVerified`, say so in the commit message.

### Organizations

Each entry in `src/data/organizations.ts` needs an official URL and `lastVerified`. Listing means "this organization works on prion disease", not endorsement, partnership or contact permission. Do not add personal email addresses of researchers. Institutional contact pages only.

### Timeline

`src/data/timeline.ts` holds public information at month-level precision. Do not add dates, locations or details that the family has not shared.

### Photographs

Do not add photographs of Lito, his family or anyone else. The existing images were taken from material the family shared publicly and appear in a deliberate order (see the README). Changing or reordering them is a content decision for the maintainer, not a pull request.

## Translations

`src/messages/en.json` and `src/messages/pt-br.json` must have the same keys. Data files use the `Localized` type, which requires one value per locale, so TypeScript will fail the build if a language is missing.

When editing Portuguese, use Brazilian Portuguese. Keep the tone plain and direct; the site is read by families under stress and by professionals who are short on time.

To add a language, follow the steps in the README under "Adding a language", then translate both the message file and every `Localized` value. Partial translations are not merged, because a half-translated page looks broken to a reader who does not speak English.

## Code style

- TypeScript, strict. No `any` unless there is a comment explaining why.
- Run `pnpm lint` and fix everything it reports.
- Keep components small. The homepage is a sequence of sections in `src/components/home/`, in narrative order. Do not reorder them without discussing it in an issue.
- Do not add dependencies for something the standard library or Next.js already does.
- No em dashes in prose, in code comments or in message files.

## Commit messages

Commits follow Conventional Commits: `type(scope): description`, imperative and lowercase, no trailing period.

```
fix(form): keep review step focus after validation error
feat(data): add ReBEC registry source
docs(readme): explain moderated submission mode
chore(data): refresh lastVerified on trials
```

Allowed types: `feat`, `fix`, `refactor`, `perf`, `test`, `docs`, `build`, `ci`, `chore`, `style`, `revert`.

## Pull requests

- One change per pull request.
- The title must be a valid Conventional Commit subject, since it becomes the squash-merge commit message.
- Fill in the template. For content changes, list the sources. For UI changes, say which viewports you checked.
- Screenshots help for visual changes. Include both languages if the change affects text.

The maintainer reviews every pull request personally. Response time depends on what else is happening; this is a volunteer project. Requests from Lito's family or team are handled before anything else.

## Contact

Questions about contributing: open an issue or write to helplito@brunosilva.io.

Do not send scientific or medical information through GitHub. That goes to Lito's official team at ajudalito@avioesemusicas.com, using the form on the site.
