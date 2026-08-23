import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { NoticeBand } from "@/components/layout/NoticeBand";
import { ResearchAreaCard } from "@/components/research/ResearchAreaCard";
import { TrialCard } from "@/components/research/TrialCard";
import { OrganizationDirectory } from "@/components/research/OrganizationDirectory";
import { researchAreas } from "@/data/research-areas";
import { trials } from "@/data/trials";
import { organizations } from "@/data/organizations";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata(locale, "research", "/research");
}

export default async function ResearchPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("researchPage");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <NoticeBand />

      <section id="areas" className="scroll-mt-20 bg-cream-50 py-16 sm:py-24">
        <Container size="wide">
          <div className="max-w-3xl">
            <h2 className="display text-3xl text-navy-900 sm:text-4xl">{t("areasTitle")}</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-700">{t("areasIntro")}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, i) => (
              <ResearchAreaCard key={area.id} area={area} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section id="trials" className="scroll-mt-20 bg-navy-950 py-16 text-cream-50 sm:py-24">
        <Container size="wide">
          <div className="max-w-3xl">
            <h2 className="display text-3xl sm:text-4xl">{t("trialsTitle")}</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-cream-200/85">{t("trialsIntro")}</p>
            <p className="mt-4 border-l-2 border-amber-400 pl-4 text-sm leading-relaxed text-cream-200/80">{t("trialsDisclaimer")}</p>
          </div>
          <div className="mt-8 space-y-6">
            {trials.map((trial) => (
              <TrialCard key={trial.id} trial={trial} />
            ))}
          </div>
          <p className="mt-6">
            <ExternalLink href="https://clinicaltrials.gov/search?cond=Prion%20Diseases" className="text-cream-100">
              {t("searchRegistry")}
            </ExternalLink>
          </p>
        </Container>
      </section>

      <section id="organizations" className="scroll-mt-20 border-t border-navy-900/15 bg-cream-100 py-16 sm:py-24">
        <Container size="wide">
          <div className="max-w-3xl">
            <h2 className="display text-3xl text-navy-900 sm:text-4xl">{t("orgsTitle")}</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-700">{t("orgsIntro")}</p>
          </div>
          <div className="mt-8">
            <OrganizationDirectory organizations={organizations} />
          </div>
          <p className="mt-10 max-w-2xl text-sm text-ink-500">{t("maintenance")}</p>
        </Container>
      </section>
    </>
  );
}
