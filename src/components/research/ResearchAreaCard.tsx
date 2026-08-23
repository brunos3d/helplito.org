import { useLocale, useTranslations } from "next-intl";
import type { ResearchArea } from "@/data/types";
import type { Locale } from "@/i18n/routing";
import { t as pick, cn } from "@/lib/utils";

type Props = { area: ResearchArea; index: number; tone?: "light" | "dark" };

/** Plain explanation first. Technical detail behind a native disclosure. */
export function ResearchAreaCard({ area, index, tone = "light" }: Props) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");
  const dark = tone === "dark";

  return (
    <article
      className={cn(
        "border p-6",
        dark ? "border-cream-50/25 bg-navy-900 text-cream-50" : "border-navy-900/15 bg-cream-50 text-ink-900",
      )}
    >
      <p className={cn("font-mono text-xs tabular-nums", dark ? "text-amber-300" : "text-amber-600")}>
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="display mt-2 text-2xl">{pick(area.title, locale)}</h3>
      <p className={cn("mt-3 text-sm leading-relaxed", dark ? "text-cream-200/80" : "text-ink-700")}>
        {pick(area.plain, locale)}
      </p>
      <details className="group mt-4">
        <summary
          className={cn(
            "eyebrow inline-flex cursor-pointer list-none items-center gap-2 select-none",
            dark ? "text-amber-300" : "text-amber-600",
          )}
        >
          <span className="group-open:hidden">{t("showTechnical")}</span>
          <span className="hidden group-open:inline">{t("hideTechnical")}</span>
          <span aria-hidden>+</span>
        </summary>
        <p className={cn("mt-3 border-l-2 pl-4 text-sm leading-relaxed", dark ? "border-sky-500 text-cream-200/75" : "border-sky-700 text-ink-700")}>
          {pick(area.technical, locale)}
        </p>
      </details>
    </article>
  );
}
