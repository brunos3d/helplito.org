import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { t as pick } from "@/lib/utils";
import { timeline } from "@/data/timeline";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";

/** Section 3. The family, and the public timeline in three steps. */
export function WhatHappened() {
  const t = useTranslations("home.happened");
  const locale = useLocale() as Locale;
  const entries = timeline.filter((e) => ["prior-health", "symptoms", "diagnosis"].includes(e.id));

  return (
    <section className="border-b border-navy-900/15 bg-cream-100 py-16 sm:py-24">
      <Container size="wide">
        <div className="grid gap-10 md:grid-cols-12 lg:gap-12">
          <div className="md:col-span-7">
            <Eyebrow index="02">{t("eyebrow")}</Eyebrow>
            <h2 className="display mt-4 text-3xl text-navy-900 sm:text-4xl">{t("title")}</h2>
            <div className="prose-soft mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink-700">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
            </div>

            <ol className="mt-10 max-w-2xl border-t border-navy-900/15">
              {entries.map((e) => (
                <li key={e.id} className="grid gap-2 border-b border-navy-900/15 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6 md:grid-cols-1 md:gap-2 lg:grid-cols-[9rem_1fr] lg:gap-6">
                  <p className="eyebrow pt-1 text-amber-600">{pick(e.date, locale)}</p>
                  <div>
                    <h3 className="font-medium text-navy-900">{pick(e.title, locale)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">{pick(e.body, locale)}</p>
                  </div>
                </li>
              ))}
            </ol>
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
      </Container>
    </section>
  );
}
