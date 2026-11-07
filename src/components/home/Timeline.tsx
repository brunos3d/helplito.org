import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { cn, t as pick } from "@/lib/utils";
import { timeline } from "@/data/timeline";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";

/** Section 3. The post-mortem: what Help Lito was, and one timeline for Lito and the project. */
export function Timeline() {
  const t = useTranslations("home.timeline");
  const locale = useLocale() as Locale;

  return (
    <section id="timeline" className="scroll-mt-20 border-b border-navy-900/15 bg-cream-100 py-16 sm:py-24">
      <Container size="wide">
        <div className="grid gap-10 md:grid-cols-12 lg:gap-12">
          <div className="md:col-span-7">
            <Eyebrow index="03">{t("eyebrow")}</Eyebrow>
            <h2 className="display mt-4 text-3xl text-navy-900 sm:text-4xl">{t("title")}</h2>
            <div className="prose-soft mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink-700">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
            </div>
          </div>
          <div className="md:col-span-5">
            <Figure
              src="/lito-and-wife.jpg"
              alt={t("imageAlt")}
              caption={t("imageCaption")}
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>

        <ol className="mt-14 border-t border-navy-900/15">
          {timeline.map((e) => (
            <li
              key={e.id}
              className={cn(
                "grid gap-2 border-b border-navy-900/15 py-5 sm:grid-cols-[12rem_7rem_1fr] sm:gap-6",
                e.upcoming && "border-dashed text-ink-500",
              )}
            >
              <p className="eyebrow pt-1 text-amber-600">
                <time dateTime={e.isoDate}>{pick(e.date, locale)}</time>
              </p>
              <p className="pt-1">
                <span
                  className={cn(
                    "eyebrow inline-block border px-1.5 py-0.5",
                    e.kind === "lito" ? "border-navy-900/40 text-navy-900" : "border-amber-600/60 text-amber-700",
                  )}
                >
                  {e.kind === "lito" ? t("kindLito") : t("kindProject")}
                </span>
                {e.upcoming && <span className="eyebrow ml-2 text-ink-500">{t("upcoming")}</span>}
              </p>
              <div className="max-w-2xl">
                <h3 className={cn("font-medium", e.upcoming ? "text-ink-700" : "text-navy-900")}>{pick(e.title, locale)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">{pick(e.body, locale)}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
