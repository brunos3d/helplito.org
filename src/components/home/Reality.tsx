import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";

/**
 * Section 5. Why time matters. Appears only after the visitor knows Lito.
 * One image, one statement, no sensational copy.
 */
export function Reality() {
  const t = useTranslations("home.reality");

  return (
    <section className="bg-navy-900 py-16 text-cream-50 sm:py-24">
      <Container size="wide">
        <div className="grid gap-10 md:grid-cols-12 lg:gap-12">
          <div className="md:col-span-5 lg:col-span-4">
            <Figure
              src="/lito-hospitalized.jpg"
              alt={t("imageAlt")}
              caption={t("imageCaption")}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 40vw, 100vw"
              className="[&_figcaption]:text-cream-200/70 [&>div]:border-cream-50/20"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-7 lg:col-start-6">
            <Eyebrow index="04" tone="light">{t("eyebrow")}</Eyebrow>
            <h2 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">{t("title")}</h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-cream-200/85">{t("body")}</p>
            <p className="mt-8 max-w-xl border-t border-cream-50/20 pt-6 font-display text-xl leading-snug text-amber-300 sm:text-2xl">
              {t("transition")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
