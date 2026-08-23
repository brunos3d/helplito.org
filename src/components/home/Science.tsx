import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { formatDate, t as pick } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink, ArrowIcon, ExternalIcon } from "@/components/ui/Button";
import { researchAreas } from "@/data/research-areas";
import { trials } from "@/data/trials";
import { organizations } from "@/data/organizations";

/**
 * Section 6. What research exists, in summary.
 * The full picture lives on /research. Here: directions, one registered trial, where it happens.
 */
export function Science() {
  const t = useTranslations("home.science");
  const c = useTranslations("common");
  const s = useTranslations("status");
  const locale = useLocale() as Locale;
  const trial = trials.find((x) => x.id === "prism");

  return (
    <section className="border-t border-cream-50/15 bg-navy-950 py-16 text-cream-50 sm:py-24">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow index="05" tone="light">{t("eyebrow")}</Eyebrow>
            <h2 className="display mt-4 text-3xl sm:text-4xl">{t("title")}</h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-cream-200/85">{t("intro")}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Research directions */}
          <div className="lg:col-span-6">
            <h3 className="eyebrow text-cream-200/70">{t("areasTitle")}</h3>
            <ol className="mt-3 border-t border-cream-50/20">
              {researchAreas.map((area, i) => (
                <li key={area.id} className="grid gap-1 border-b border-cream-50/20 py-4 sm:grid-cols-[2.5rem_1fr]">
                  <span className="font-mono text-xs text-amber-300 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="font-medium">{pick(area.title, locale)}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-cream-200/75">{pick(area.plain, locale)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-10 lg:col-span-6">
            {/* One registered trial, status never hardcoded */}
            {trial && (
              <div>
                <h3 className="eyebrow text-cream-200/70">{t("trialTitle")}</h3>
                <div className="mt-3 border border-cream-50/25 p-5 sm:p-6">
                  <p className="eyebrow text-amber-300">
                    {trial.phase} · {trial.registryId}
                  </p>
                  <h4 className="display mt-2 text-2xl">
                    {trial.acronym}. {pick(trial.title, locale)}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-cream-200/80">{pick(trial.summary, locale)}</p>
                  <dl className="mt-5 grid gap-x-6 gap-y-3 border-t border-cream-50/20 pt-4 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="eyebrow text-cream-200/70">{c("sponsor")}</dt>
                      <dd className="mt-1">{trial.sponsor}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-cream-200/70">{c("status")}</dt>
                      <dd className="mt-1">
                        {s(trial.status)}
                        <span className="block font-mono text-xs text-cream-200/70">
                          {c("lastVerified")}: {formatDate(trial.lastVerified, locale)}
                        </span>
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-xs leading-relaxed text-cream-200/70">{t("trialNote")}</p>
                  <a
                    href={trial.registryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-cream-50 link-underline"
                  >
                    {c("viewRegistry")} <ExternalIcon />
                  </a>
                </div>
              </div>
            )}

            {/* Where it happens: a plain list, not a chart */}
            <div>
              <h3 className="eyebrow text-cream-200/70">{t("orgsTitle")}</h3>
              <p className="mt-2 text-sm text-cream-200/70">{t("orgsIntro")}</p>
              <ul className="mt-3 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
                {organizations.map((o) => (
                  <li key={o.id}>
                    <a href={o.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-1 -my-1 text-cream-100/85 link-underline">
                      {o.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ButtonLink href="/research" variant="outline-light">
            {t("cta")} <ArrowIcon />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
