import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, ogLocale, type Locale } from "@/i18n/routing";
import { ogImages, twitterImages } from "@/lib/social-images";

type PageKey =
  | "aboutLito"
  | "cjd"
  | "research"
  | "help"
  | "sources"
  | "about"
  | "disclaimer"
  | "privacy"
  | "responsibleUse"
  | "accessibility"
  | "contact";

/**
 * Builds localized metadata for an inner page, including hreflang alternates.
 *
 * Next.js shallow-merges metadata across segments, so this openGraph object
 * replaces the one from the locale layout entirely. Every field the layout
 * sets (siteName, locale, images) is therefore repeated here; the static
 * sharing images come from src/lib/social-images.ts.
 */
export async function pageMetadata(locale: string, key: PageKey, path: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.pages" });
  const tMeta = await getTranslations({ locale, namespace: "meta" });
  const title = t(`${key}.title`);
  const description = t(`${key}.description`);
  const l = locale as Locale;
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l === "pt-br" ? "pt-BR" : l, `/${l}${path}`]),
        ),
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: tMeta("siteName"),
      locale: ogLocale[l],
      alternateLocale: routing.locales.filter((x) => x !== l).map((x) => ogLocale[x]),
      title,
      description,
      url: `/${locale}${path}`,
      images: [...ogImages],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [...twitterImages],
    },
  };
}
