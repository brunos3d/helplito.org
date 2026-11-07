import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink, ArrowIcon, ExternalIcon } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";

/**
 * Opening. The memorial: who he was, when he lived, the line he kept repeating.
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
            <h1 className="display mt-5 text-[2.8rem] text-navy-900 sm:text-6xl lg:text-7xl">{t("title")}</h1>
            <p className="mt-4 font-mono text-sm tracking-wide text-ink-500">
              <span className="sr-only">{t("datesLabel")}: </span>
              <time dateTime="1967-01-25" className="whitespace-nowrap">{t("born")}</time>
              <span aria-hidden className="mx-3 text-amber-600">
                ·
              </span>
              <time dateTime="2026-10-01" className="whitespace-nowrap">{t("died")}</time>
            </p>

            <figure className="mt-8 max-w-xl border-l-2 border-amber-500 pl-5">
              <blockquote lang="pt-BR" className="display text-2xl leading-snug text-navy-900 sm:text-3xl">
                &ldquo;{t("quote")}&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-sm text-ink-500">
                {t.has("quoteTranslation") && (
                  <span className="block italic text-ink-700">{t("quoteTranslation")}</span>
                )}
                {t("quoteNote")}
              </figcaption>
            </figure>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-700">{t("lead")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.avioesEMusicas.youtube} size="lg">
                {t("primaryCta")} <ExternalIcon />
              </ButtonLink>
              <ButtonLink href="#timeline" variant="outline-dark" size="lg">
                {t("secondaryCta")} <ArrowIcon />
              </ButtonLink>
            </div>
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
