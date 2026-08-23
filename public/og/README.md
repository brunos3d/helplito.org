# Social sharing images

Static assets referenced by the site metadata. Generated once during
development; nothing here is rendered at request time.

| File | Size | Ratio | Used by |
| --- | --- | --- | --- |
| `help-lito-og-1200x630.jpg` | 1200x630 | 1.91:1 | Primary `og:image`. Facebook, LinkedIn, WhatsApp, Slack, Discord, iMessage and other Open Graph consumers. |
| `help-lito-square-1200x1200.jpg` | 1200x1200 | 1:1 | Secondary `og:image` for platforms that prefer or crop to square previews. |
| `help-lito-twitter-1200x675.jpg` | 1200x675 | 16:9 | `twitter:image` for the X summary_large_image card. |
| `help-lito-vertical-1080x1350.jpg` | 1080x1350 | 4:5 | Not referenced by metadata. For feed posts and other vertical placements. |
| `help-lito-story-1080x1920.jpg` | 1080x1920 | 9:16 | Not referenced by metadata. For stories and full-screen vertical contexts. Text sits inside the story UI safe areas. |

Format is JPEG quality 90. The cards contain a photograph, so PNG versions
are 3 to 6 times larger and the 1200x630 PNG (about 430 KB) would break the
roughly 300 KB limit WhatsApp applies to link preview images.

## Regenerating

The layouts live in `src/components/og/SocialCard.tsx` and render at
`/dev/og/[variant]` (development only; the route returns 404 in production).
Each aspect ratio has its own composition. The copy in the cards is fixed
English by design and is not localized.

```
pnpm dev     # terminal 1
pnpm og      # terminal 2, captures all five files into public/og/
```

The capture uses Gelasio, the Georgia-metric-compatible Google font, so the
output does not depend on the fonts installed on the machine running it.

Metadata references live in `src/lib/social-images.ts`.
