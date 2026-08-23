import { notFound } from "next/navigation";
import { SocialCard, VARIANTS, type VariantId } from "@/components/og/SocialCard";

/**
 * Renders one social card template at its exact target size.
 * Development-only; the layout above 404s in production.
 */
export default async function OgVariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  if (!(variant in VARIANTS)) notFound();
  return <SocialCard variant={variant as VariantId} />;
}
