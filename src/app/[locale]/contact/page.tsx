import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { NoticeBand } from "@/components/layout/NoticeBand";
import { ContactChannels } from "@/components/layout/ContactChannels";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata(locale, "contact", "/contact");
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");
  const paragraphs = t.raw("body") as string[];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
      <NoticeBand />
      <section className="bg-cream-50 py-16 sm:py-20">
        <Container size="wide">
          <ContactChannels />
          <div className="prose-soft mt-12 max-w-3xl text-[1.05rem] leading-relaxed text-ink-700">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-500">
            <Link href="/can-you-help" className="link-underline text-navy-900">
              {t("formLink")}
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
