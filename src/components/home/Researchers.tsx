import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink, ArrowIcon, ExternalIcon } from "@/components/ui/Button";

/** Section 4. A signpost for researchers until the domain expires. Points to the frozen archive. */
export function Researchers() {
  const t = useTranslations("home.researchers");
  const items = t.raw("items") as Array<{ title: string; body: string }>;

  return (
    <section id="researchers" className="scroll-mt-20 bg-cream-50 py-16 sm:py-24">
      <Container size="wide">
        <div className="max-w-3xl">
          <Eyebrow index="04">{t("eyebrow")}</Eyebrow>
          <h2 className="display mt-4 text-3xl text-navy-900 sm:text-4xl">{t("title")}</h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-700">{t("body")}</p>
        </div>

        <ol className="mt-10 grid border-y border-navy-900/15 md:grid-cols-3 md:divide-x md:divide-navy-900/15">
          {items.map((item, i) => (
            <li key={item.title} className="border-b border-navy-900/15 py-5 last:border-b-0 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0">
              <span className="font-mono text-xs text-amber-600 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-medium text-navy-900">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-700">{item.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/research" size="lg">
            {t("archiveCta")} <ArrowIcon />
          </ButtonLink>
          {siteConfig.knowledgeUrl && (
            <ButtonLink href={siteConfig.knowledgeUrl} variant="outline-dark" size="lg">
              {t("repoCta")} <ExternalIcon />
            </ButtonLink>
          )}
          <ButtonLink href="/understanding-cjd" variant="text" size="lg" className="text-navy-900">
            {t("cjdCta")} <ArrowIcon />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
