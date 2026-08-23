/**
 * Central configuration for Help Lito.
 * Official channels live here so they are never duplicated across pages.
 *
 * Two contact channels exist and must never be confused:
 * - officialEmail: Lito's official team. Scientific, clinical and institutional information.
 * - initiativeEmail: the person responsible for this website. Corrections, removals, legal,
 *   ownership and operational questions.
 */
/**
 * Public origin of the deployment, without a trailing slash.
 * Read from NEXT_PUBLIC_SITE_URL: .env.production sets https://helplito.org for Vercel,
 * .env.local sets http://localhost:3000 for development. Falls back to the production URL.
 */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://helplito.org").replace(/\/+$/, "");

export const siteConfig = {
  name: "Help Lito",
  domain: "helplito.org",
  url: siteUrl,

  /** Official email published by Lito's team for concrete, verifiable information. */
  officialEmail: "ajudalito@avioesemusicas.com",
  officialInstagram: {
    handle: "@lito",
    url: "https://www.instagram.com/lito/",
  },
  avioesEMusicas: {
    name: "Aviões e Músicas",
    url: "https://www.avioesemusicas.com",
    youtube: "https://www.youtube.com/@avioesemusicas",
  },

  /** Accountability contact for the independent initiative. Not a promotional channel. */
  initiativeEmail: "helplito@brunosilva.io",
  responsiblePerson: "Bruno Silva",

  /**
   * Public source code repository. Set NEXT_PUBLIC_REPOSITORY_URL once the repository exists.
   * The UI hides the link while this is empty. Never invent a URL here.
   */
  repositoryUrl: process.env.NEXT_PUBLIC_REPOSITORY_URL || "",

  /**
   * How the "Can You Help?" form delivers information.
   * - "mailto": builds a structured email the sender reviews and sends from their own client.
   * - "moderated": posts to /api/submissions, which forwards to SUBMISSION_WEBHOOK_URL for private review.
   */
  submissionMode:
    (process.env.NEXT_PUBLIC_SUBMISSION_MODE as "mailto" | "moderated") ??
    "mailto",
} as const;
