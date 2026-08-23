import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink, ArrowIcon } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";

/** Section 2. Who Lito is, before anything medical. */
export function WhoIsLito() {
  const t = useTranslations("home.who");

  return (
    <section id="case" className="scroll-mt-20 border-b border-navy-900/15 bg-cream-50 py-16 sm:py-24">
      <Container size="wide">
        <div className="grid gap-10 md:grid-cols-12 lg:gap-12">
          <div className="md:col-span-5">
            <Figure
              src="/lito-airbus.jpg"
              alt={t("imageAlt")}
              caption={t("imageCaption")}
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="md:col-span-7">
            <Eyebrow index="01">{t("eyebrow")}</Eyebrow>
            <h2 className="display mt-4 text-3xl text-navy-900 sm:text-4xl">{t("title")}</h2>
            <div className="prose-soft mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink-700">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>
            <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-6 border-t border-navy-900/15 pt-6 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-sm text-ink-500">{t("facts.years")}</dt>
                <dd className="display text-4xl text-navy-900">37+</dd>
              </div>
              <div className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-sm text-ink-500">{t("facts.teaching")}</dt>
                <dd className="display text-4xl text-navy-900">15+</dd>
              </div>
              <div className="col-span-2 flex flex-col-reverse justify-end sm:col-span-1 md:col-span-2 lg:col-span-1">
                <dt className="mt-1 text-sm text-ink-500">{t("facts.rolesLabel")}</dt>
                <dd className="text-sm text-ink-900">{t("facts.roles")}</dd>
              </div>
            </dl>
            <ButtonLink href="/about-lito" variant="text" className="mt-8 text-navy-900">
              {t("cta")} <ArrowIcon />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
