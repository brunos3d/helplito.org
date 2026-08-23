import { useLocale, useTranslations } from "next-intl";
import type { ResearchOrganization } from "@/data/types";
import type { Locale } from "@/i18n/routing";
import { formatDate, t as pick } from "@/lib/utils";
import { ExternalIcon } from "@/components/ui/Button";

export function OrganizationCard({ org }: { org: ResearchOrganization }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");
  const c = useTranslations("categories");

  return (
    <article className="flex h-full flex-col border border-navy-900/15 bg-cream-50 p-5">
      <p className="eyebrow text-ink-500">{org.category.map((cat) => c(cat)).join(" · ")}</p>
      <h3 className="display mt-3 text-xl leading-snug text-navy-900">{org.name}</h3>
      {(org.city || org.country) && (
        <p className="mt-1 font-mono text-xs text-ink-500">{[org.city, org.country].filter(Boolean).join(", ")}</p>
      )}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{pick(org.description, locale)}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-navy-900/15 pt-3">
        <a
          href={org.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 link-underline"
        >
          {t("officialSite")} <ExternalIcon />
        </a>
        {org.lastVerified && (
          <span className="font-mono text-[11px] text-ink-500">
            {t("lastVerified")} {formatDate(org.lastVerified, locale)}
          </span>
        )}
      </div>
    </article>
  );
}
