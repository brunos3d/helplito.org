import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <section className="bg-cream-50 pt-40 pb-32 text-navy-900">
      <Container>
        <p className="eyebrow text-amber-600">404</p>
        <h1 className="display mt-4 text-5xl">{t("title")}</h1>
        <p className="mt-4 text-ink-700">{t("body")}</p>
        <ButtonLink href="/" className="mt-8">
          {t("cta")}
        </ButtonLink>
      </Container>
    </section>
  );
}
