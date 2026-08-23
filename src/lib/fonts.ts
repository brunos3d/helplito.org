import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

/**
 * Display and long-form headings use Georgia, a system serif, by design.
 * It needs no download and reads as established rather than trendy.
 * Body copy uses IBM Plex Sans; labels and metadata use IBM Plex Mono.
 */
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});
