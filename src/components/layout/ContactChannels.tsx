import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { cn } from "@/lib/utils";

/**
 * The two contact channels, side by side, never confused.
 * Official team: scientific, clinical, institutional information.
 * Initiative: corrections, removals, legal, ownership, website questions.
 */
export function ContactChannels({ className }: { className?: string }) {
  const t = useTranslations("channels");
  const officialFor = t.raw("official.for") as string[];
  const initiativeFor = t.raw("initiative.for") as string[];

  return (
    <div className={cn("grid border border-navy-900/20 md:grid-cols-2", className)}>
      <section className="border-b border-navy-900/20 bg-navy-900 p-6 text-cream-50 md:border-r md:border-b-0 sm:p-8" aria-labelledby="ch-official">
        <p className="eyebrow text-amber-300">{t("official.eyebrow")}</p>
        <h3 id="ch-official" className="display mt-2 text-2xl">
          {t("official.title")}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-cream-200/80">{t("official.body")}</p>
        <ul className="mt-4 grid gap-1 text-sm text-cream-100/90 sm:grid-cols-2">
          {officialFor.map((x) => (
            <li key={x} className="flex gap-2">
              <span aria-hidden className="text-amber-300">·</span>
              {x}
            </li>
          ))}
        </ul>
        <CopyEmail email={siteConfig.officialEmail} tone="light" className="mt-6" />
      </section>

      <section className="bg-cream-100 p-6 sm:p-8" aria-labelledby="ch-initiative">
        <p className="eyebrow text-ink-500">{t("initiative.eyebrow")}</p>
        <h3 id="ch-initiative" className="display mt-2 text-2xl text-navy-900">
          {t("initiative.title")}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-700">{t("initiative.body")}</p>
        <ul className="mt-4 grid gap-1 text-sm text-ink-900 sm:grid-cols-2">
          {initiativeFor.map((x) => (
            <li key={x} className="flex gap-2">
              <span aria-hidden className="text-ink-300">·</span>
              {x}
            </li>
          ))}
        </ul>
        <CopyEmail email={siteConfig.initiativeEmail} className="mt-6" />
        <p className="mt-3 text-xs text-ink-500">{t("initiative.note")}</p>
      </section>
    </div>
  );
}
