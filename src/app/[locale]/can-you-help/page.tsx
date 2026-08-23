import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { NoticeBand } from "@/components/layout/NoticeBand";
import { ContactChannels } from "@/components/layout/ContactChannels";
import { HelpForm } from "@/components/help/HelpForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata(locale, "help", "/can-you-help");
}

export default async function CanYouHelpPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("helpPage");
  const whoList = t.raw("whoList") as string[];
  const howSteps = t.raw("howSteps") as string[];
  const notes = t.raw("notes.items") as string[];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("subtitle")} />
      <NoticeBand />

      <section className="bg-cream-50 py-12 sm:py-16">
        <Container size="wide">
          <ContactChannels />
        </Container>
      </section>

      <section className="border-t border-navy-900/15 bg-cream-50 py-16 sm:py-20">
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

            <div id="help-form" className="scroll-mt-24 lg:col-span-8">
              <h2 className="display text-2xl text-navy-900">{t("formTitle")}</h2>
              <p className="mt-2 mb-8 text-sm text-ink-500">{t("directBody")}</p>
              <HelpForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
