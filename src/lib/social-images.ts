/**
 * Static social sharing images.
 *
 * The files live in public/og/ and are generated once during development from
 * the templates at /dev/og/[variant] by scripts/generate-og.mjs. Nothing is
 * rendered at request time. See public/og/README.md for the full set and the
 * regeneration workflow.
 *
 * Next.js replaces the openGraph and twitter objects wholesale when a deeper
 * segment defines them (shallow merge), so every metadata builder must spread
 * these constants instead of relying on inheritance from the locale layout.
 */

const ALT = "In memory of Lito Sousa, 1967–2026. Black and white portrait of Lito smiling with his arms crossed.";

/**
 * og:image entries. The 1200x630 image is the card for Facebook, LinkedIn,
 * WhatsApp, Slack, Discord and iMessage.
 */
export const ogImages = [
  {
    url: "/og/help-lito-memorial-og-1200x630.jpg",
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: ALT,
  },
] as const;

/** twitter:image for the summary_large_image card (16:9). */
export const twitterImages = [
  {
    url: "/og/help-lito-memorial-twitter-1200x675.jpg",
    width: 1200,
    height: 675,
    alt: ALT,
  },
] as const;
