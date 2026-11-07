import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink, ExternalIcon } from "@/components/ui/Button";
import { ExternalLink } from "@/components/ui/ExternalLink";

/** Section 5, the close. How to keep his channel alive, the family first, and his line. */
export function KeepAlive() {
  const t = useTranslations("home.keepAlive");
  const hero = useTranslations("home.hero");
  const ways = t.raw("ways") as Array<{ title: string; body: string }>;

  return (
    <section id="keep-alive" className="scroll-mt-20 bg-navy-900 py-16 text-cream-50 sm:py-24">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Eyebrow index="05" tone="light">{t("eyebrow")}</Eyebrow>
            <h2 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">{t("title")}</h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-cream-200/85">{t("p1")}</p>
            <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-cream-50">{t("p2")}</p>
            <div className="mt-8">
              <ButtonLink href={siteConfig.avioesEMusicas.youtube} variant="amber" size="lg">
                {t("youtubeCta")} <ExternalIcon />
              </ButtonLink>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream-100/85">
              <li>
                <ExternalLink href={siteConfig.officialInstagram.url}>
                  {t("instagram", { handle: siteConfig.officialInstagram.handle })}
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={siteConfig.avioesEMusicas.url}>{t("site")}</ExternalLink>
              </li>
            </ul>
          </div>
          <ol className="border-t border-cream-50/20 lg:col-span-6 lg:mt-9">
            {ways.map((w, i) => (
              <li key={w.title} className="grid gap-1 border-b border-cream-50/20 py-4 sm:grid-cols-[2.5rem_1fr]">
                <span className="font-mono text-xs text-amber-300 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-medium">{w.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream-200/75">{w.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <figure className="mt-20 border-t border-cream-50/20 pt-14 text-center">
          <blockquote lang="pt-BR" className="display text-3xl leading-snug text-amber-300 sm:text-5xl">
            &ldquo;{hero("quote")}&rdquo;
          </blockquote>
          {hero.has("quoteTranslation") && (
            <p className="mt-3 text-sm italic text-cream-200/70">{hero("quoteTranslation")}</p>
          )}
          <figcaption className="eyebrow mt-5 text-cream-200/70">{t("closingAttribution")}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
