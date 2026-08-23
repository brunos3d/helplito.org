import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

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

/** Builds localized metadata for an inner page, including hreflang alternates. */
export async function pageMetadata(locale: string, key: PageKey, path: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.pages" });
  const title = t(`${key}.title`);
  const description = t(`${key}.description`);
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
    openGraph: { title, description, url: `/${locale}${path}` },
  };
}
