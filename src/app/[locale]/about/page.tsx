import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { EmailLink } from "@/components/ui/EmailLink";
import { NoticeBand } from "@/components/layout/NoticeBand";
import { ContactChannels } from "@/components/layout/ContactChannels";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata(locale, "about", "/about");
}

const keys = [
  "why",
  "notFundraising",
  "independent",
  "responsibility",
  "curation",
  "noGuarantee",
  "notAdvice",
  "corrections",
  "handover",
  "openSource",
] as const;

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");
  const f = await getTranslations("footer");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")}>
        <dl className="border border-navy-900/20 bg-cream-50 p-5 text-sm">
          <dt className="eyebrow text-ink-500">{t("responsibleLabel")}</dt>
          <dd className="mt-1 text-navy-900">{siteConfig.responsiblePerson}</dd>
          <dd className="mt-0.5 font-mono">
            <EmailLink email={siteConfig.initiativeEmail} className="text-navy-900" />
          </dd>
          <dt className="eyebrow mt-4 text-ink-500">{t("officialLabel")}</dt>
          <dd className="mt-1 font-mono">
            <EmailLink email={siteConfig.officialEmail} className="text-navy-900" />
          </dd>
          <dt className="eyebrow mt-4 text-ink-500">{t("sourceCodeLabel")}</dt>
          <dd className="mt-1 text-ink-700">
            {siteConfig.repositoryUrl ? (
              <ExternalLink href={siteConfig.repositoryUrl} className="text-navy-900">
                {t("sourceCodeLink")}
              </ExternalLink>
            ) : (
              t("sourceCodePending")
            )}
          </dd>
        </dl>
      </PageHeader>
      <NoticeBand />
      <section className="bg-cream-50 py-16 sm:py-24">
        <Container size="wide">
          <div className="divide-y divide-navy-900/15 border-y border-navy-900/15">
            {keys.map((key) => (
              <article key={key} className="grid gap-3 py-8 lg:grid-cols-12">
                <h2 className="display text-2xl text-navy-900 lg:col-span-4">{t(`sections.${key}.title`)}</h2>
                <p className="max-w-3xl text-[1.05rem] leading-relaxed text-ink-700 lg:col-span-8">{t(`sections.${key}.body`)}</p>
              </article>
            ))}
          </div>

          <ContactChannels className="mt-14" />

          <div className="mt-12">
            <h2 className="eyebrow text-ink-500">{t("linksTitle")}</h2>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-900">
              {[
                ["/sources", f("links.sources")],
                ["/responsible-use", f("links.responsibleUse")],
                ["/privacy", f("links.privacy")],
                ["/medical-disclaimer", f("links.disclaimer")],
                ["/accessibility", f("links.accessibility")],
                ["/contact", f("links.contact")],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="link-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
