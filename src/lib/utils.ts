import type { Locale } from "@/i18n/routing";
import type { Localized } from "@/data/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Pick the value for a locale from a Localized object. */
export function t(value: Localized, locale: Locale): string {
  return value[locale] ?? value.en;
}

/** Format an ISO date (YYYY-MM-DD) for display in the given locale. */
export function formatDate(iso: string, locale: Locale): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return new Intl.DateTimeFormat(locale === "pt-br" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}
