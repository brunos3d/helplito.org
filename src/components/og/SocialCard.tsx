/**
 * Social sharing card layouts for Help Lito.
 *
 * Rendered only by the development route /dev/og/[variant] and captured once as
 * static PNG/JPEG files in public/og/. Never rendered on production requests.
 *
 * Each variant is a distinct composition designed for its aspect ratio, not a
 * resized copy of the landscape layout. Copy is fixed by design and must not be
 * localized or rewritten here; see docs in public/og/README.md.
 */

const COPY = {
  title: "Help Lito Find the Right People to Help",
  description:
    "Help Lito is an independent initiative connecting relevant knowledge and expertise with Lito's official team.",
  url: "HELPLITO.ORG",
} as const;

const COLOR = {
  bg: "#0b1a2b", // navy-900
  bgDeep: "#06101a", // navy-950
  text: "#faf8f3", // cream-50
  textSoft: "rgba(251, 248, 242, 0.78)",
  amber: "#e4b64f", // amber-400
  border: "rgba(250, 248, 243, 0.35)",
} as const;

const FONT = {
  serif: "var(--og-serif), Georgia, 'Times New Roman', serif",
  sans: "var(--font-plex-sans), 'Helvetica Neue', Arial, sans-serif",
  mono: "var(--font-plex-mono), 'SFMono-Regular', Menlo, monospace",
} as const;

export const VARIANTS = {
  og: { width: 1200, height: 630, file: "help-lito-og-1200x630" },
  twitter: { width: 1200, height: 675, file: "help-lito-twitter-1200x675" },
  square: { width: 1200, height: 1200, file: "help-lito-square-1200x1200" },
  vertical: { width: 1080, height: 1350, file: "help-lito-vertical-1080x1350" },
  story: { width: 1080, height: 1920, file: "help-lito-story-1080x1920" },
} as const;

export type VariantId = keyof typeof VARIANTS;

/** Same drawing as src/app/icon.svg, sized for large canvases. */
function Mark({ size }: { size: number }) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" width={size} height={size} style={{ display: "block" }}>
      <rect width="32" height="32" fill={COLOR.bgDeep} />
      <circle cx="16" cy="16" r="9.5" fill="none" stroke={COLOR.text} strokeWidth="1.8" />
      <path d="M16 16 L23 9" stroke={COLOR.amber} strokeWidth="2.4" strokeLinecap="square" />
      <circle cx="16" cy="16" r="2.4" fill={COLOR.amber} />
    </svg>
  );
}

function Wordmark({ markSize, fontSize }: { markSize: number; fontSize: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: markSize * 0.3 }}>
      <div style={{ outline: `1px solid ${COLOR.border}` }}>
        <Mark size={markSize} />
      </div>
      <span
        style={{
          fontFamily: FONT.serif,
          fontSize,
          lineHeight: 1,
          color: COLOR.text,
          letterSpacing: "-0.01em",
        }}
      >
        Help Lito
      </span>
    </div>
  );
}

function UrlLabel({ fontSize }: { fontSize: number }) {
  return (
    <span
      style={{
        fontFamily: FONT.mono,
        fontSize,
        letterSpacing: "0.18em",
        color: COLOR.amber,
      }}
    >
      {COPY.url}
    </span>
  );
}

function Title({ fontSize, maxWidth }: { fontSize: number; maxWidth?: number }) {
  return (
    <h1
      style={{
        margin: 0,
        fontFamily: FONT.serif,
        fontWeight: 400,
        fontSize,
        lineHeight: 1.08,
        letterSpacing: "-0.01em",
        color: COLOR.text,
        maxWidth,
        textWrap: "balance",
      }}
    >
      {COPY.title}
    </h1>
  );
}

function Description({ fontSize, maxWidth }: { fontSize: number; maxWidth?: number }) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: FONT.sans,
        fontWeight: 400,
        fontSize,
        lineHeight: 1.5,
        color: COLOR.textSoft,
        maxWidth,
        textWrap: "pretty",
      }}
    >
      {COPY.description}
    </p>
  );
}

/**
 * The photograph as a distinct bordered object, matching the site's Figure
 * component. No gradients or overlays; the photo stays visually honest.
 * objectPosition keeps both faces inside every crop.
 */
function Photo({ position, style }: { position: string; style?: React.CSSProperties }) {
  return (
    <div style={{ border: `1px solid ${COLOR.border}`, overflow: "hidden", display: "flex", ...style }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/lito-and-wife.jpg"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}

/** Landscape: typography left, photograph right. Used for 1200x630 and 1200x675. */
function Landscape({ width, height }: { width: number; height: number }) {
  return (
    <div style={{ width, height, display: "flex", background: COLOR.bg }}>
      <div
        style={{
          width: 660,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 48px 48px 56px",
        }}
      >
        <Wordmark markSize={40} fontSize={30} />
        <div>
          <Title fontSize={58} maxWidth={556} />
          <div style={{ marginTop: 26 }}>
            <Description fontSize={22} maxWidth={520} />
          </div>
        </div>
        <UrlLabel fontSize={17} />
      </div>
      <div style={{ flex: 1, display: "flex", padding: "44px 44px 44px 0" }}>
        <Photo position="50% 26%" style={{ flex: 1 }} />
      </div>
    </div>
  );
}

/** Square 1200x1200: identity and title on top, photograph below. */
function Square() {
  return (
    <div
      style={{
        width: 1200,
        height: 1200,
        display: "flex",
        flexDirection: "column",
        background: COLOR.bg,
        padding: 60,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Wordmark markSize={44} fontSize={33} />
        <UrlLabel fontSize={17} />
      </div>
      <div style={{ marginTop: 46 }}>
        <Title fontSize={74} maxWidth={1020} />
      </div>
      <div style={{ marginTop: 26 }}>
        <Description fontSize={26} maxWidth={900} />
      </div>
      <Photo position="50% 24%" style={{ marginTop: 44, flex: 1, minHeight: 0 }} />
    </div>
  );
}

/** Vertical 4:5, 1080x1350: editorial column, photograph in the lower half. */
function Vertical() {
  return (
    <div
      style={{
        width: 1080,
        height: 1350,
        display: "flex",
        flexDirection: "column",
        background: COLOR.bg,
        padding: 60,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Wordmark markSize={42} fontSize={31} />
        <UrlLabel fontSize={16} />
      </div>
      <div style={{ marginTop: 42 }}>
        <Title fontSize={68} maxWidth={930} />
      </div>
      <div style={{ marginTop: 24 }}>
        <Description fontSize={25} maxWidth={850} />
      </div>
      <Photo position="50% 22%" style={{ marginTop: 40, flex: 1, minHeight: 0 }} />
    </div>
  );
}

/**
 * Story 9:16, 1080x1920. Generous safe areas: story UI covers roughly the top
 * and bottom 250px, so all text and the photograph stay inside that window.
 */
function Story() {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        display: "flex",
        flexDirection: "column",
        background: COLOR.bg,
        padding: "190px 84px 170px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Wordmark markSize={48} fontSize={36} />
        <UrlLabel fontSize={18} />
      </div>
      <div style={{ marginTop: 58 }}>
        <Title fontSize={84} maxWidth={900} />
      </div>
      <div style={{ marginTop: 30 }}>
        <Description fontSize={30} maxWidth={830} />
      </div>
      <Photo position="50% 30%" style={{ marginTop: 56, flex: 1, minHeight: 0 }} />
    </div>
  );
}

export function SocialCard({ variant }: { variant: VariantId }) {
  const { width, height } = VARIANTS[variant];
  switch (variant) {
    case "og":
    case "twitter":
      return <Landscape width={width} height={height} />;
    case "square":
      return <Square />;
    case "vertical":
      return <Vertical />;
    case "story":
      return <Story />;
  }
}
