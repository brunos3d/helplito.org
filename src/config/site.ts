/**
 * Central configuration for Help Lito.
 * Official channels live here so they are never duplicated across pages.
 *
 * Lito died on 1 October 2026 and the site is now a memorial. The email his team published
 * for his case (ajudalito@avioesemusicas.com) is intentionally no longer listed.
 * - Official channels (Instagram, Aviões e Músicas site and YouTube): maintained by his team.
 * - initiativeEmail: the person responsible for this website. Corrections, removals, legal,
 *   ownership and operational questions.
 */
/**
 * Public origin of the deployment, without a trailing slash.
 * Read from NEXT_PUBLIC_SITE_URL: .env.production sets https://helplito.org for Vercel,
 * .env.local sets http://localhost:3000 for development. Falls back to the production URL.
 */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://helplito.org").replace(/\/+$/, "");
const repositoryUrl = process.env.NEXT_PUBLIC_REPOSITORY_URL || "";

export const siteConfig = {
  name: "Help Lito",
  domain: "helplito.org",
  url: siteUrl,

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
  repositoryUrl,

  /** Public research notes written during the campaign. Empty when repositoryUrl is unset. */
  knowledgeUrl: repositoryUrl ? `${repositoryUrl}/tree/main/knowledge` : "",
} as const;
