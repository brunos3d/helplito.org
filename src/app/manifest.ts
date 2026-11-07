import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Help Lito",
    short_name: "Help Lito",
    description:
      "Independent memorial to Lito Sousa (1967-2026), aviation educator and creator of Aviões e Músicas. Not a fundraiser.",
    start_url: "/",
    display: "browser",
    background_color: "#faf8f3",
    theme_color: "#0b1a2b",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
