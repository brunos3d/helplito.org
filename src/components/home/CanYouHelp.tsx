import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink, ArrowIcon } from "@/components/ui/Button";
import { ContactChannels } from "@/components/layout/ContactChannels";

/**
 * Section 7. What help is sought, how information flows, and the two distinct channels.
 */
export function CanYouHelp() {
  const t = useTranslations("home.help");
  const lookingFor = t.raw("lookingForList") as string[];
  const notLookingFor = t.raw("notLookingForList") as string[];
  const flow = t.raw("flow") as Array<{ title: string; body: string }>;

  return (
    <section id="help" className="scroll-mt-20 bg-cream-50 py-16 sm:py-24">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow index="06">{t("eyebrow")}</Eyebrow>
            <h2 className="display mt-4 text-3xl text-navy-900 sm:text-4xl">{t("title")}</h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-700">{t("subtitle")}</p>
          </div>
        </div>

        {/* How information reaches the team. A structured flow, labeled. */}
        <div className="mt-12">
          <h3 className="eyebrow text-ink-500">{t("flowTitle")}</h3>
          <ol className="mt-3 grid border-y border-navy-900/15 md:grid-cols-3 md:divide-x md:divide-navy-900/15">
            {flow.map((step, i) => (
              <li key={step.title} className="border-b border-navy-900/15 py-5 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0">
                <span className="font-mono text-xs text-amber-600 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="mt-2 font-medium text-navy-900">{step.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border border-navy-900/15 p-6">
            <h3 className="eyebrow text-sky-700">{t("lookingFor")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-900">
              {lookingFor.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden className="mt-[0.55rem] h-1 w-3 shrink-0 bg-sky-700" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-navy-900/15 bg-cream-100 p-6">
            <h3 className="eyebrow text-ink-500">{t("notLookingFor")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              {notLookingFor.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden className="mt-[0.55rem] h-1 w-3 shrink-0 bg-ink-300" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <ContactChannels />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/can-you-help" size="lg">
            {t("formCta")} <ArrowIcon />
          </ButtonLink>
          <ButtonLink href={siteConfig.officialInstagram.url} variant="outline-dark" size="lg">
            {t("follow")}: {siteConfig.officialInstagram.handle}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
