import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { EmailLink } from "@/components/ui/EmailLink";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const links: Array<[string, string]> = [
    ["/about", t("links.about")],
    ["/sources", t("links.sources")],
    ["/responsible-use", t("links.responsibleUse")],
    ["/privacy", t("links.privacy")],
    ["/medical-disclaimer", t("links.disclaimer")],
    ["/accessibility", t("links.accessibility")],
    ["/contact", t("links.contact")],
  ];

  return (
    <footer className="border-t border-cream-50/10 bg-navy-950 text-cream-50">
      <Container size="wide" className="py-14 sm:py-16">
        <div className="grid gap-10 border-b border-cream-50/15 pb-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Wordmark tone="light" />
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-cream-200/80">{t("description")}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-amber-300">{t("notFundraising")}</p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-cream-200/70">{t("navigate")}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/", nav("home")],
                ["/about-lito", nav("aboutLito")],
                ["/understanding-cjd", nav("cjd")],
                ["/research", nav("research")],
                ["/can-you-help", nav("help")],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="inline-block py-1 -my-1 text-cream-100/85 hover:text-cream-50">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="eyebrow text-cream-200/70">{t("transparency")}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="inline-block py-1 -my-1 text-cream-100/85 hover:text-cream-50">
                    {label}
                  </Link>
                </li>
              ))}
              {siteConfig.repositoryUrl && (
                <li>
                  <ExternalLink href={siteConfig.repositoryUrl} className="text-cream-100/85">
                    {t("links.sourceCode")}
                  </ExternalLink>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-2">
          <div className="border-l-2 border-amber-400 pl-5">
            <h2 className="eyebrow text-amber-300">{t("officialTitle")}</h2>
            <p className="mt-2 text-sm text-cream-200/75">{t("officialBody")}</p>
            <p className="mt-2 font-mono text-[0.95rem]">
              <EmailLink email={siteConfig.officialEmail} />
            </p>
            <p className="mt-1 text-sm text-cream-200/75">
              <ExternalLink href={siteConfig.officialInstagram.url} className="text-cream-100/85">
                Instagram {siteConfig.officialInstagram.handle}
              </ExternalLink>
            </p>
          </div>
          <div className="border-l-2 border-cream-50/30 pl-5">
            <h2 className="eyebrow text-cream-200/70">{t("initiativeTitle")}</h2>
            <p className="mt-2 text-sm text-cream-200/75">{t("initiativeBody")}</p>
            <p className="mt-2 font-mono text-[0.95rem]">
              <EmailLink email={siteConfig.initiativeEmail} />
            </p>
          </div>
        </div>

        <p className="border-t border-cream-50/15 pt-6 text-xs leading-relaxed text-cream-200/70">
          {new Date().getFullYear()} {t("copyright")}
        </p>
      </Container>
    </footer>
  );
}
