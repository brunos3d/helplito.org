"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const labels: Record<Locale, string> = { en: "EN", "pt-br": "PT" };

export function LanguageSwitcher({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  return (
    <div className={cn("flex items-center", className)} role="group" aria-label={t("language")}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span aria-hidden className={cn("h-3 w-px bg-current opacity-30", size === "lg" ? "mx-2" : "mx-1.5")} />}
          <button
            type="button"
            lang={l === "pt-br" ? "pt-BR" : "en"}
            aria-pressed={l === locale}
            onClick={() => router.replace(pathname, { locale: l })}
            className={cn(
              "eyebrow transition-opacity",
              size === "lg" ? "px-3 py-2.5" : "px-1 py-1",
              l === locale ? "underline underline-offset-4" : "opacity-55 hover:opacity-100",
            )}
          >
            <span className="sr-only">{l === locale ? "" : t("switchTo")}</span>
            {labels[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
