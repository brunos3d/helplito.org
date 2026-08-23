import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, htmlLang, ogLocale, type Locale } from "@/i18n/routing";
import { plexMono, plexSans } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

/** viewport-fit=cover lets safe-area insets apply on notched phones. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b1a2b",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const l = locale as Locale;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("defaultTitle"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("defaultDescription"),
    applicationName: t("siteName"),
    keywords: [
      "Lito Sousa",
      "Help Lito",
      "Aviões e Músicas",
      "Creutzfeldt-Jakob Disease",
      "CJD",
      "Doença de Creutzfeldt-Jakob",
      "prion disease",
      "prion disease research",
      "CJD clinical trials",
      "prion clinical trials",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        "pt-BR": "/pt-br",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: t("siteName"),
      locale: ogLocale[l],
      alternateLocale: routing.locales.filter((x) => x !== l).map((x) => ogLocale[x]),
      url: `/${locale}`,
      title: t("defaultTitle"),
      description: t("defaultDescription"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("defaultTitle"),
      description: t("defaultDescription"),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={htmlLang[locale]}
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        {/* Marks that JavaScript is running, before first paint. Entrance animations are gated on it in globals.css. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.setAttribute('data-js','')" }} />
      </head>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
