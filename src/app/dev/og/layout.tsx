import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Gelasio } from "next/font/google";
import { plexMono, plexSans } from "@/lib/fonts";

/**
 * Development-only shell for the social image templates at /dev/og/[variant].
 * Returns 404 in production; the templates exist only to be captured once as
 * static files in public/og/ (see scripts/generate-og.mjs).
 *
 * Display type: Gelasio, the Georgia-metric-compatible Google font. The site
 * itself uses system Georgia, but screenshots must not depend on which fonts
 * the capturing machine has installed. display "block" avoids capturing a
 * fallback font mid-swap.
 */
const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "block",
});

export default function OgDevLayout({ children }: { children: ReactNode }) {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      {/* The dev tools indicator must never appear in a captured image. */}
      <style>{`nextjs-portal { display: none !important; }`}</style>
      <body
        style={
          {
            margin: 0,
            background: "#333",
            "--og-serif": gelasio.style.fontFamily,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
