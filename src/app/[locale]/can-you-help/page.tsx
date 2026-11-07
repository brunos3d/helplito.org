import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { organizations } from "@/data/organizations";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink, ArrowIcon } from "@/components/ui/Button";
import { NoticeBand } from "@/components/layout/NoticeBand";
import { OrganizationDirectory } from "@/components/research/OrganizationDirectory";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata(locale, "help", "/can-you-help");
}

/**
 * For researchers. The route keeps its original path so existing links still work.
 * Lito's case has ended; this page points professionals to the institutions doing the work.
 */
export default async function ForResearchersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("helpPage");
  const nav = await getTranslations("nav");
  const whoList = t.raw("whoList") as string[];
  const howSteps = t.raw("howSteps") as string[];
  const notes = t.raw("notes.items") as string[];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("subtitle")} />
      <NoticeBand />

      <section className="bg-cream-50 py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="space-y-8 lg:col-span-4">
              <div>
                <h2 className="eyebrow text-amber-600">{t("who")}</h2>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
                  {whoList.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span aria-hidden className="text-amber-600">·</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="eyebrow text-amber-600">{t("howTitle")}</h2>
                <ol className="mt-3 space-y-2 text-sm text-ink-700">
                  {howSteps.map((x, i) => (
                    <li key={x} className="flex gap-3">
                      <span className="font-mono text-xs text-navy-900 tabular-nums">0{i + 1}</span>
                      {x}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border border-navy-900/15 bg-cream-100 p-5">
                <h2 className="eyebrow text-ink-500">{t("notes.title")}</h2>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  {notes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </aside>

            <div id="organizations" className="scroll-mt-24 lg:col-span-8">
              <h2 className="display text-2xl text-navy-900 sm:text-3xl">{t("orgsTitle")}</h2>
              <p className="mt-2 mb-8 max-w-2xl text-sm leading-relaxed text-ink-500">{t("orgsIntro")}</p>
              <OrganizationDirectory organizations={organizations} />
              <div className="mt-10">
                <ButtonLink href="/research" variant="outline-dark">
                  {nav("research")} <ArrowIcon />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
