import { useLocale, useTranslations } from "next-intl";
import type { ClinicalTrial } from "@/data/types";
import type { Locale } from "@/i18n/routing";
import { formatDate, t as pick } from "@/lib/utils";
import { ExternalIcon } from "@/components/ui/Button";

/**
 * Clinical trial record. Status is never presented as a permanent fact:
 * it is paired with a last-verified date and a link to the official registry.
 */
export function TrialCard({ trial }: { trial: ClinicalTrial }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");
  const s = useTranslations("status");

  return (
    <article className="border border-cream-50/25 bg-navy-900 text-cream-50">
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-cream-50/20 p-6 sm:p-8 lg:col-span-8 lg:border-r lg:border-b-0">
          <p className="eyebrow text-amber-300">
            {trial.phase} · {trial.registryId}
          </p>
          <h3 className="display mt-3 text-2xl sm:text-3xl">
            {trial.acronym && <span>{trial.acronym}. </span>}
            <span className="text-cream-200/90">{pick(trial.title, locale)}</span>
          </h3>
          <p className="mt-5 max-w-2xl leading-relaxed text-cream-200/85">{pick(trial.summary, locale)}</p>
          <dl className="mt-6 grid gap-5 border-t border-cream-50/20 pt-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="eyebrow text-cream-200/70">{t("sponsor")}</dt>
              <dd className="mt-1">{trial.sponsor}</dd>
            </div>
            {trial.plannedParticipants && (
              <div>
                <dt className="eyebrow text-cream-200/70">{t("participants")}</dt>
                <dd className="mt-1">{t("approximately", { count: trial.plannedParticipants })}</dd>
              </div>
            )}
            {trial.locations.length > 0 && (
              <div className="sm:col-span-2">
                <dt className="eyebrow text-cream-200/70">{t("locations")}</dt>
                <dd className="mt-1.5">
                  <ul className="grid gap-1 sm:grid-cols-2">
                    {trial.locations.map((loc) => (
                      <li key={loc}>{loc}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
        </div>

        <div className="flex flex-col justify-between gap-6 bg-navy-950 p-6 sm:p-8 lg:col-span-4">
          <div>
            <p className="eyebrow text-cream-200/70">{t("registryStatus")}</p>
            <p className="mt-1 text-lg font-medium">{s(trial.status)}</p>
            <p className="mt-1 font-mono text-xs text-cream-200/70">
              {t("lastVerified")}: {formatDate(trial.lastVerified, locale)}
            </p>
            {trial.statusNote && (
              <p className="mt-4 text-xs leading-relaxed text-cream-200/65">{pick(trial.statusNote, locale)}</p>
            )}
            {trial.sponsorOperationalNote && (
              <div className="mt-5 border-t border-cream-50/20 pt-4">
                <p className="eyebrow text-cream-200/70">{t("sponsorOperationalStatus")}</p>
                <p className="mt-2 text-xs leading-relaxed text-cream-200/75">
                  {pick(trial.sponsorOperationalNote, locale)}
                </p>
              </div>
            )}
            {trial.siteOperationalNote && (
              <div className="mt-5 border-t border-cream-50/20 pt-4">
                <p className="eyebrow text-cream-200/70">{t("siteOperationalStatus")}</p>
                <p className="mt-2 text-xs leading-relaxed text-cream-200/75">
                  {pick(trial.siteOperationalNote, locale)}
                </p>
              </div>
            )}
            {trial.caseStatus && (
              <div className="mt-5 border-t border-amber-400/30 pt-4">
                <p className="eyebrow text-amber-300">{t("caseSpecificStatus")}</p>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/90">
                  {pick(trial.caseStatus, locale)}
                </p>
              </div>
            )}
            {trial.expandedAccessNote && (
              <div className="mt-5 border-t border-cream-50/20 pt-4">
                <p className="eyebrow text-cream-200/70">{t("expandedAccessStatus")}</p>
                <p className="mt-2 text-xs leading-relaxed text-cream-200/75">
                  {pick(trial.expandedAccessNote, locale)}
                </p>
              </div>
            )}
            {trial.regulatoryNote && (
              <div className="mt-5 border-t border-cream-50/20 pt-4">
                <p className="eyebrow text-cream-200/70">{t("regulatoryStatus")}</p>
                <p className="mt-2 text-xs leading-relaxed text-cream-200/75">
                  {pick(trial.regulatoryNote, locale)}
                </p>
              </div>
            )}
          </div>
          <a
            href={trial.registryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-amber-400 bg-amber-400 px-4 py-2.5 text-sm font-medium text-navy-950 transition-colors hover:bg-amber-300"
          >
            {t("viewRegistry")} <ExternalIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
