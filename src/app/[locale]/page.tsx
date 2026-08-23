import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { WhoIsLito } from "@/components/home/WhoIsLito";
import { WhatHappened } from "@/components/home/WhatHappened";
import { Diagnosis } from "@/components/home/Diagnosis";
import { Reality } from "@/components/home/Reality";
import { Science } from "@/components/home/Science";
import { CanYouHelp } from "@/components/home/CanYouHelp";
import { NoticeBand } from "@/components/layout/NoticeBand";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <NoticeBand />
      <WhoIsLito />
      <WhatHappened />
      <Diagnosis />
      <Reality />
      <Science />
      <CanYouHelp />
    </>
  );
}
