import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { EmailLink } from "@/components/ui/EmailLink";

/**
 * Public notice: independent initiative, not a fundraiser.
 * Part of the site's identity. Shown on every page, large enough to be read.
 */
export function NoticeBand() {
  const t = useTranslations("notice");
  return (
    <aside
      aria-labelledby="notice-title"
      className="border-y border-amber-600/60 bg-amber-200 text-navy-950"
    >
      <Container size="wide" className="py-6 sm:py-7">
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-8">
          <div className="flex gap-4 lg:col-span-7">
            <span
              aria-hidden
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-navy-950 font-mono text-xs font-medium"
            >
              i
            </span>
            <div>
              <h2 id="notice-title" className="display text-xl leading-snug sm:text-2xl">
                {t("title")}
              </h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed">{t("body")}</p>
            </div>
          </div>
          <dl className="grid gap-3 border-t border-navy-950/20 pt-4 text-sm lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div>
              <dt className="eyebrow text-navy-950/70">{t("officialLabel")}</dt>
              <dd className="mt-1 font-mono text-[0.9rem]">
                <EmailLink email={siteConfig.officialEmail} />
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-navy-950/70">{t("initiativeLabel")}</dt>
              <dd className="mt-1 font-mono text-[0.9rem]">
                <EmailLink email={siteConfig.initiativeEmail} />
              </dd>
            </div>
          </dl>
          <p className="lg:col-span-12 lg:-mt-2">
            <Link href="/about" className="link-underline text-sm font-medium">
              {t("link")}
            </Link>
          </p>
        </div>
      </Container>
    </aside>
  );
}
