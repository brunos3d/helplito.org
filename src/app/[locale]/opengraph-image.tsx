import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getTranslations } from "next-intl/server";

export const alt = "Help Lito";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });
  const portrait = await readFile(path.join(process.cwd(), "public", "lito.jpg"));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b1a2b",
          color: "#fbf8f2",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px",
            width: "680px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28 }}>
            <div style={{ width: 16, height: 16, background: "#e4b64f" }} />
            <span>Help Lito</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontSize: 46, lineHeight: 1.1, letterSpacing: -0.5 }}>{t("title")}</div>
            <div style={{ fontSize: 22, lineHeight: 1.4, color: "rgba(251,248,242,0.75)", fontFamily: "sans-serif" }}>
              {t("eyebrow")}
            </div>
          </div>
          <div style={{ fontSize: 18, color: "#e4b64f", fontFamily: "monospace", letterSpacing: 2 }}>
            {`HELPLITO.ORG · ${t("notValue").toUpperCase()}`}
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, padding: "48px 48px 48px 0" }}>
          <img
            src={portraitSrc}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", border: "1px solid rgba(250,248,243,0.35)" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
