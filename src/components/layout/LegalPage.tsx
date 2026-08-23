import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { EmailLink } from "@/components/ui/EmailLink";
import { NoticeBand } from "./NoticeBand";

type Key = "disclaimer" | "privacy" | "responsibleUse" | "accessibility";

/**
 * Shared layout for policy pages. Content comes from messages.legal.<key>.
 * Each section has a heading and one or more paragraphs.
 */
export async function LegalPage({ legalKey }: { legalKey: Key }) {
  const t = await getTranslations("legal");
  const sections = t.raw(`${legalKey}.sections`) as Array<{ title: string; body: string[] }>;

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t(`${legalKey}.title`)} lead={t(`${legalKey}.lead`)} />
      <NoticeBand />
      <section className="bg-cream-50 py-16 sm:py-20">
        <Container>
          <div className="divide-y divide-navy-900/15 border-y border-navy-900/15">
            {sections.map((s) => (
              <article key={s.title} className="grid gap-3 py-7 lg:grid-cols-12">
                <h2 className="display text-xl text-navy-900 lg:col-span-4">{s.title}</h2>
                <div className="prose-soft max-w-3xl text-[1.02rem] leading-relaxed text-ink-700 lg:col-span-8">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-500">
            {t("contactLine")}{" "}
            <EmailLink email={siteConfig.initiativeEmail} className="font-mono text-navy-900" />
          </p>
        </Container>
      </section>
    </>
  );
}
