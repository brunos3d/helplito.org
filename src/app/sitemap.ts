import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";

const paths = [
  "",
  "/about-lito",
  "/understanding-cjd",
  "/research",
  "/can-you-help",
  "/sources",
  "/about",
  "/contact",
  "/medical-disclaimer",
  "/privacy",
  "/responsible-use",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path === "" || path === "/research" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/can-you-help" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l === "pt-br" ? "pt-BR" : l, `${siteConfig.url}/${l}${path}`]),
        ),
      },
    })),
  );
}
