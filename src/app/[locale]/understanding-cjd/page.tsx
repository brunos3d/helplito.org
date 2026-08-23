import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink, ArrowIcon } from "@/components/ui/Button";
import { NoticeBand } from "@/components/layout/NoticeBand";
import { PrionDiagram } from "@/components/visuals/PrionDiagram";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata(locale, "cjd", "/understanding-cjd");
}

const sectionKeys = ["what", "prion", "difficult", "time", "contact", "research"] as const;
const withTechnical = new Set(["what", "difficult"]);

export default async function CjdPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cjdPage");
  const d = await getTranslations("home.diagnosis");
  const c = await getTranslations("common");
  const steps = (["normal", "misfold", "chain", "damage"] as const).map((k) => ({
    title: d(`steps.${k}.title`),
    body: d(`steps.${k}.body`),
  }));
  const symptoms = d.raw("symptoms") as string[];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <NoticeBand />

      <section className="bg-cream-50 py-16 sm:py-20">
        <Container size="wide">
          <PrionDiagram steps={steps} />
        </Container>
      </section>

      <section className="border-t border-navy-900/15 bg-cream-100 py-16 sm:py-24">
        <Container size="wide">
          <div className="divide-y divide-navy-900/15 border-y border-navy-900/15">
            {sectionKeys.map((key, i) => (
              <article key={key} className="grid gap-4 py-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs text-amber-600 tabular-nums">0{i + 1}</p>
                  <h2 className="display mt-2 text-2xl text-navy-900 sm:text-3xl">{t(`sections.${key}.title`)}</h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="max-w-3xl text-[1.05rem] leading-relaxed text-ink-700">{t(`sections.${key}.body`)}</p>
                  {withTechnical.has(key) && (
                    <details className="group mt-4">
                      <summary className="eyebrow inline-flex cursor-pointer list-none items-center gap-2 text-amber-600 select-none">
                        <span className="group-open:hidden">{c("showTechnical")}</span>
                        <span className="hidden group-open:inline">{c("hideTechnical")}</span>
                        <span aria-hidden>+</span>
                      </summary>
                      <p className="mt-3 max-w-3xl border-l-2 border-sky-700 pl-4 text-base leading-relaxed text-ink-700">
                        {t(`sections.${key}.technical`)}
                      </p>
                    </details>
                  )}
                </div>
              </article>
            ))}

            <article className="grid gap-4 py-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs text-amber-600 tabular-nums">07</p>
                <h2 className="display mt-2 text-2xl text-navy-900 sm:text-3xl">{t("symptomsTitle")}</h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[1.05rem] leading-relaxed text-ink-700">{t("symptomsIntro")}</p>
                <ul className="mt-4 grid gap-x-6 gap-y-1.5 text-sm text-ink-900 sm:grid-cols-2">
                  {symptoms.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden className="text-amber-600">·</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-2xl text-sm text-ink-500">
              {t("sourcesNote")}{" "}
              <Link href="/sources" className="link-underline text-navy-900">
                {c("sources")}
              </Link>
            </p>
            <ButtonLink href="/research">
              {t("cta")} <ArrowIcon />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
