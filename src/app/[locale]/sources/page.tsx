import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";
import { formatDate, t as pick } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { sources, sourceCategories } from "@/data/sources";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ExternalIcon } from "@/components/ui/Button";
import { EmailLink } from "@/components/ui/EmailLink";
import { NoticeBand } from "@/components/layout/NoticeBand";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata(locale, "sources", "/sources");
}

export default async function SourcesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations("sourcesPage");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <NoticeBand />
      <section className="bg-cream-50 py-16 sm:py-24">
        <Container>
          <div className="space-y-14">
            {sourceCategories.map((cat) => {
              const items = sources.filter((s) => s.category === cat);
              if (items.length === 0) return null;
              return (
                <section key={cat} aria-labelledby={`src-${cat}`}>
                  <h2 id={`src-${cat}`} className="display text-2xl text-navy-900 sm:text-3xl">
                    {t(`categories.${cat}`)}
                  </h2>
                  <ol className="mt-5 divide-y divide-navy-900/15 border-y border-navy-900/15">
                    {items.map((s) => (
                      <li key={s.id} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                        <div className="sm:col-span-8">
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline inline-flex items-start gap-2 text-[1.05rem] text-navy-900"
                          >
                            <span>{pick(s.title, l)}</span>
                            <ExternalIcon className="mt-1.5 shrink-0 opacity-60" />
                          </a>
                          <p className="mt-1 text-sm text-ink-500">{s.publisher}</p>
                          {s.note && <p className="mt-2 text-sm leading-relaxed text-ink-700">{pick(s.note, l)}</p>}
                        </div>
                        <div className="font-mono text-xs text-ink-500 sm:col-span-4 sm:text-right">
                          {s.accessed && (
                            <>
                              {t("accessed")} {formatDate(s.accessed, l)}
                            </>
                          )}
                          <p className="mt-1 break-all opacity-70">{s.url.replace(/^https?:\/\//, "")}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              );
            })}
          </div>
          <p className="mt-14 border-t border-navy-900/15 pt-6 text-sm text-ink-500">
            {t("correction")}{" "}
            <EmailLink email={siteConfig.initiativeEmail} className="font-mono text-navy-900" />
          </p>
        </Container>
      </section>
    </>
  );
}
