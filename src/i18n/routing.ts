import { defineRouting } from "next-intl/routing";

export const locales = ["en", "pt-br"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: true,
});

/** BCP 47 tags for the html lang attribute and Open Graph. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  "pt-br": "pt-BR",
};

export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  "pt-br": "pt_BR",
};
