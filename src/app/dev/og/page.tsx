import Link from "next/link";
import { VARIANTS } from "@/components/og/SocialCard";

/** Development index listing every social card template. 404s in production. */
export default function OgIndexPage() {
  return (
    <main style={{ fontFamily: "monospace", color: "#faf8f3", padding: 32 }}>
      <h1 style={{ fontSize: 18 }}>Social card templates</h1>
      <p style={{ fontSize: 13 }}>
        Captured to public/og/ by scripts/generate-og.mjs. Development only.
      </p>
      <ul style={{ lineHeight: 2 }}>
        {Object.entries(VARIANTS).map(([id, v]) => (
          <li key={id}>
            <Link href={`/dev/og/${id}`} style={{ color: "#e4b64f" }}>
              {id}
            </Link>{" "}
            {v.width}x{v.height} → /og/{v.file}
          </li>
        ))}
      </ul>
    </main>
  );
}
