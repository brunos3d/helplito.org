import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";

/**
 * Public notice: independent memorial, not a fundraiser.
 * Shown on every page. Kept to one line on wide screens so the memorial stays quiet.
 */
export function NoticeBand() {
  const t = useTranslations("notice");
  return (
    <aside aria-labelledby="notice-title" className="border-y border-amber-600/40 bg-amber-100 text-navy-950">
      <Container size="wide" className="flex flex-col gap-2 py-4 text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h2 id="notice-title" className="inline font-sans text-sm font-medium">
            {t("title")}
          </h2>{" "}
          <p className="inline">{t("body")}</p>
        </div>
        <Link href="/about" className="link-underline shrink-0 font-medium">
          {t("link")}
        </Link>
      </Container>
    </aside>
  );
}
