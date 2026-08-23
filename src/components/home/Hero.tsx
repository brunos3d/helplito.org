import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink, ArrowIcon } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";

/**
 * Section 1. What this is, who it is about, what it asks, in one screen.
 * The portrait is a distinct object, not a background.
 */
export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="bg-cream-50 pt-28 pb-14 sm:pt-36 sm:pb-20">
      <Container size="wide">
        <div className="grid gap-10 md:grid-cols-12 md:items-center lg:items-stretch lg:gap-12">
          <div className="flex flex-col justify-center md:col-span-7">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h1 className="display mt-5 text-[2.4rem] text-navy-900 sm:text-5xl md:text-[2.6rem] lg:text-[3.6rem]">{t("title")}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">{t("lead")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/can-you-help" size="lg">
                {t("primaryCta")} <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="#case" variant="outline-dark" size="lg">
                {t("secondaryCta")}
              </ButtonLink>
            </div>
            <dl className="mt-10 grid max-w-xl gap-x-8 gap-y-3 border-t border-navy-900/15 pt-5 text-sm sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <div>
                <dt className="eyebrow text-ink-500">{t("whatLabel")}</dt>
                <dd className="mt-1 text-ink-900">{t("whatValue")}</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink-500">{t("notLabel")}</dt>
                <dd className="mt-1 text-ink-900">{t("notValue")}</dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-5">
            <Figure
              src="/lito.jpg"
              alt={t("portraitAlt")}
              caption={t("portraitCaption")}
              sizes="(min-width: 768px) 40vw, 100vw"
              priority
              position="50% 20%"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
