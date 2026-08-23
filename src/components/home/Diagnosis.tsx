import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink, ArrowIcon } from "@/components/ui/Button";
import { PrionDiagram } from "@/components/visuals/PrionDiagram";

/** Section 4. The disease, in sixty seconds. */
export function Diagnosis() {
  const t = useTranslations("home.diagnosis");
  const steps = (["normal", "misfold", "chain", "damage"] as const).map((k) => ({
    title: t(`steps.${k}.title`),
    body: t(`steps.${k}.body`),
  }));

  return (
    <section id="diagnosis" className="scroll-mt-20 border-b border-navy-900/15 bg-cream-50 py-16 sm:py-24">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow index="03">{t("eyebrow")}</Eyebrow>
            <h2 className="display mt-4 text-3xl text-navy-900 sm:text-4xl">{t("title")}</h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-700">{t("intro")}</p>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-ink-900 lg:col-span-5 lg:pt-9">
            <p className="border-l-2 border-amber-500 pl-4">{t("noTreatment")}</p>
            <p className="border-l-2 border-sky-700 pl-4">{t("noContagion")}</p>
            <p className="font-mono text-xs text-ink-500">
              <Link href="/sources" className="link-underline">
                {t("sourceLabel")}
              </Link>
            </p>
          </div>
        </div>

        <PrionDiagram steps={steps} className="mt-12" />

        <div className="mt-10">
          <ButtonLink href="/understanding-cjd" variant="outline-dark">
            {t("cta")} <ArrowIcon />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
