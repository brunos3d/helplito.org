/**
 * Captures the social sharing images from the development templates at
 * /dev/og/[variant] and writes them to public/og/.
 *
 * This runs once during development whenever the templates change. Production
 * serves only the static files this script produces; nothing is rendered at
 * request time and the /dev/og routes return 404 in production builds.
 *
 * Usage:
 *   pnpm dev            (in another terminal)
 *   pnpm og             (BASE=http://localhost:3000 by default)
 *
 * Output format: JPEG quality 90. The cards contain a photograph, so JPEG
 * keeps every file well under the ~300 KB limit WhatsApp applies to link
 * preview images. PNG versions of the same cards are 3-6x larger.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const BASE = process.env.BASE || "http://localhost:3000";
const OUT = path.join(import.meta.dirname, "..", "public", "og");

/** Keep in sync with VARIANTS in src/components/og/SocialCard.tsx. */
const VARIANTS = [
  { id: "og", width: 1200, height: 630, file: "help-lito-og-1200x630.jpg" },
  { id: "twitter", width: 1200, height: 675, file: "help-lito-twitter-1200x675.jpg" },
  { id: "square", width: 1200, height: 1200, file: "help-lito-square-1200x1200.jpg" },
  { id: "vertical", width: 1080, height: 1350, file: "help-lito-vertical-1080x1350.jpg" },
  { id: "story", width: 1080, height: 1920, file: "help-lito-story-1080x1920.jpg" },
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();

for (const v of VARIANTS) {
  const page = await browser.newPage({
    viewport: { width: v.width, height: v.height },
    deviceScaleFactor: 1,
  });
  await page.goto(`${BASE}/dev/og/${v.id}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const out = path.join(OUT, v.file);
  await page.screenshot({
    path: out,
    clip: { x: 0, y: 0, width: v.width, height: v.height },
    type: "jpeg",
    quality: 90,
  });
  console.log(`${v.file} ${v.width}x${v.height}`);
  await page.close();
}

await browser.close();
