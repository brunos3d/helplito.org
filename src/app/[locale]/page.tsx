import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { WhoIsLito } from "@/components/home/WhoIsLito";
import { Diagnosis } from "@/components/home/Diagnosis";
import { Timeline } from "@/components/home/Timeline";
import { Researchers } from "@/components/home/Researchers";
import { KeepAlive } from "@/components/home/KeepAlive";
import { NoticeBand } from "@/components/layout/NoticeBand";

/** The memorial, read top to bottom as a post-mortem: who he was, what he had, what was tried, what remains. */
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <NoticeBand />
      <WhoIsLito />
      <Diagnosis />
      <Timeline />
      <Researchers />
      <KeepAlive />
    </>
  );
}
