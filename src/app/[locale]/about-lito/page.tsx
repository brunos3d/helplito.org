import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Figure } from "@/components/ui/Figure";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { NoticeBand } from "@/components/layout/NoticeBand";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata(locale, "aboutLito", "/about-lito");
}

export default async function AboutLitoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutLitoPage");
  const who = await getTranslations("home.who");
  const sections = ["career", "education", "impact", "why"] as const;

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <NoticeBand />
      <section className="bg-cream-50 py-16 sm:py-24">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Figure
                src="/lito-airbus.jpg"
                alt={who("imageAlt")}
                caption={who("imageCaption")}
                sizes="(min-width: 768px) 40vw, 100vw"
                priority
                className="md:sticky md:top-24"
              />
            </div>
            <div className="md:col-span-7">
              <div className="divide-y divide-navy-900/15 border-y border-navy-900/15">
                {sections.map((key) => (
                  <article key={key} className="grid gap-3 py-8 lg:grid-cols-12">
                    <h2 className="display text-2xl text-navy-900 lg:col-span-4">{t(`sections.${key}.title`)}</h2>
                    <p className="text-[1.05rem] leading-relaxed text-ink-700 lg:col-span-8">{t(`sections.${key}.body`)}</p>
                  </article>
                ))}
              </div>
              <div className="mt-10">
                <h2 className="eyebrow text-amber-600">{t("official")}</h2>
                <p className="mt-2 text-sm text-ink-500">{t("officialNote")}</p>
                <ul className="mt-3 space-y-1.5 text-navy-900">
                  <li>
                    <ExternalLink href={siteConfig.officialInstagram.url}>Instagram {siteConfig.officialInstagram.handle}</ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href={siteConfig.avioesEMusicas.url}>{siteConfig.avioesEMusicas.name}</ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href={siteConfig.avioesEMusicas.youtube}>YouTube</ExternalLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
