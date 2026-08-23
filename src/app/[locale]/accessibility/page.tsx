import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/layout/LegalPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata(locale, "accessibility", "/accessibility");
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPage legalKey="accessibility" />;
}
