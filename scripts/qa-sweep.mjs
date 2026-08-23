/**
 * End-to-end QA sweep for helplito.org.
 *
 * Visits every route in both locales across a set of viewport widths and checks:
 * horizontal overflow, console errors, failed requests, broken images, heading
 * structure, unnamed controls, internal links and anchors, language switching,
 * the mobile menu and the "Can You Help?" form validation.
 *
 * Safety: the form test stops at the review step. It never triggers the mailto
 * link and it blocks every request that is not to the server under test, so no
 * email and no external contact request can be sent.
 *
 * Usage:
 *   pnpm build && pnpm start   (or pnpm dev)
 *   pnpm qa                    (BASE=http://localhost:3000 by default)
 *   WIDTHS=320,390,768,1440 pnpm qa
 */
import { chromium } from "playwright";

const BASE = process.env.BASE || "http://localhost:3000";
const WIDTHS = (process.env.WIDTHS || "320,360,375,390,412,430,768,834,1024,1280,1440,1920")
  .split(",")
  .map(Number);
const LOCALES = ["en", "pt-br"];
const PATHS = [
  "",
  "/about-lito",
  "/understanding-cjd",
  "/research",
  "/can-you-help",
  "/about",
  "/sources",
  "/responsible-use",
  "/privacy",
  "/medical-disclaimer",
  "/accessibility",
  "/contact",
];

const problems = [];
const report = (msg) => {
  problems.push(msg);
  console.log("  FAIL " + msg);
};

/** Runs inside the page. Returns layout and markup facts for the current viewport. */
const inspect = () => {
  const vw = window.innerWidth;
  const sw = document.documentElement.scrollWidth;
  const offenders = [];
  for (const el of document.querySelectorAll("body *")) {
    if (el.closest('[aria-hidden="true"]') || el.closest("nextjs-portal")) continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0) continue;
    if (r.right > vw + 1 || r.left < -1) {
      offenders.push(`${el.tagName} [${Math.round(r.left)},${Math.round(r.right)}] "${(el.textContent || "").trim().slice(0, 30)}"`);
    }
  }
  const brokenImgs = [...document.images].filter((i) => !(i.complete && i.naturalWidth > 0)).map((i) => i.alt || i.src);
  const noAlt = [...document.images].filter((i) => !i.hasAttribute("alt")).length;
  const levels = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => +h.tagName[1]);
  let badOrder = null;
  for (let i = 1; i < levels.length; i++) if (levels[i] > levels[i - 1] + 1) badOrder = `h${levels[i - 1]} -> h${levels[i]}`;
  const unnamed = [...document.querySelectorAll("a,button")].filter(
    (el) => !(el.textContent || "").trim() && !el.getAttribute("aria-label") && !el.getAttribute("aria-labelledby"),
  ).length;
  return { vw, sw, offenders: offenders.slice(0, 5), brokenImgs, noAlt, h1: levels.filter((x) => x === 1).length, badOrder, unnamed };
};

const scrollThrough = (page) =>
  page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 30));
    }
    window.scrollTo(0, 0);
  });

const browser = await chromium.launch();

// 1. Every route at every width.
for (const w of WIDTHS) {
  const mobile = w < 700;
  const ctx = await browser.newContext({ viewport: { width: w, height: mobile ? 800 : 900 }, isMobile: mobile, hasTouch: mobile });
  const page = await ctx.newPage();
  const errs = [];
  const failed = [];
  page.on("console", (m) => {
    if (["error", "warning"].includes(m.type())) errs.push(m.text().slice(0, 140));
  });
  page.on("pageerror", (e) => errs.push("pageerror: " + e.message.slice(0, 140)));
  page.on("requestfailed", (r) => failed.push(r.url()));
  page.on("response", (r) => {
    if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`);
  });
  for (const l of LOCALES) {
    for (const p of PATHS) {
      errs.length = 0;
      failed.length = 0;
      const route = `/${l}${p}`;
      await page.goto(BASE + route, { waitUntil: "networkidle" });
      await scrollThrough(page);
      await page.waitForLoadState("networkidle");
      const a = await page.evaluate(inspect);
      const tag = `${route} @${w}`;
      if (a.sw > a.vw) report(`${tag}: horizontal overflow (${a.sw} > ${a.vw})`);
      if (a.offenders.length) report(`${tag}: elements outside viewport: ${a.offenders.join("; ")}`);
      if (a.brokenImgs.length) report(`${tag}: broken images: ${a.brokenImgs.join(", ")}`);
      if (a.noAlt) report(`${tag}: ${a.noAlt} image(s) without alt`);
      if (a.h1 !== 1) report(`${tag}: ${a.h1} h1 elements`);
      if (a.badOrder) report(`${tag}: heading level skip ${a.badOrder}`);
      if (a.unnamed) report(`${tag}: ${a.unnamed} control(s) without an accessible name`);
      if (errs.length) report(`${tag}: console: ${[...new Set(errs)].join(" | ")}`);
      if (failed.length) report(`${tag}: failed requests: ${[...new Set(failed)].join(", ")}`);
    }
  }
  await ctx.close();
  console.log(`checked ${LOCALES.length * PATHS.length} routes at ${w}px`);
}

// 2. Links, anchors, language switching (desktop).
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const targets = new Set();
  for (const l of LOCALES) {
    const other = l === "en" ? "pt-br" : "en";
    for (const p of PATHS) {
      await page.goto(`${BASE}/${l}${p}`, { waitUntil: "load" });
      await page.click(`header button[lang="${other === "en" ? "en" : "pt-BR"}"]`);
      const ok = await page.waitForURL(`**/${other}${p}`, { timeout: 5000 }).then(() => true, () => false);
      if (!ok) report(`language switch from /${l}${p} landed on ${page.url()}`);
      await page.goto(`${BASE}/${l}${p}`, { waitUntil: "load" });
      const data = await page.evaluate(() => ({
        hrefs: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
        ids: [...document.querySelectorAll("[id]")].map((e) => e.id),
        lang: document.documentElement.lang,
        canonical: document.querySelector("link[rel=canonical]")?.getAttribute("href") || "",
      }));
      if (!data.canonical.endsWith(`/${l}${p}`)) report(`/${l}${p}: canonical is ${data.canonical}`);
      for (const h of data.hrefs) {
        if (h.startsWith("#")) {
          if (!data.ids.includes(h.slice(1))) report(`/${l}${p}: missing anchor ${h}`);
        } else if (h.startsWith("/")) {
          if (!h.startsWith(`/${l}`)) report(`/${l}${p}: link leaves locale: ${h}`);
          targets.add(h);
        }
      }
    }
  }
  for (const h of targets) {
    const [path, hash] = h.split("#");
    const res = await page.goto(BASE + path, { waitUntil: "domcontentloaded" });
    if (!res || res.status() !== 200) report(`${path}: status ${res?.status()}`);
    if (hash && !(await page.evaluate((id) => !!document.getElementById(id), hash))) report(`${path}: missing #${hash}`);
  }
  await ctx.close();
  console.log(`checked ${targets.size} internal link targets and language switching on every route`);
}

// 3. Mobile menu and form validation. No email is ever sent.
{
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.route("**/*", (r) => {
    const u = r.request().url();
    if (!u.startsWith(BASE) || u.includes("/api/")) return r.abort();
    return r.continue();
  });

  await page.goto(`${BASE}/en`, { waitUntil: "load" });
  await page.click("button[aria-controls=mobile-nav]");
  const open = await page.evaluate(() => ({
    shown: getComputedStyle(document.getElementById("mobile-nav")).display !== "none",
    inert: document.getElementById("content").hasAttribute("inert"),
    links: document.querySelectorAll("#mobile-nav a").length,
  }));
  if (!open.shown || !open.inert || open.links < 6) report(`mobile menu open state: ${JSON.stringify(open)}`);
  await page.keyboard.press("Escape");
  const closed = await page.evaluate(() => ({
    shown: getComputedStyle(document.getElementById("mobile-nav")).display !== "none",
    focus: document.activeElement?.getAttribute("aria-controls"),
  }));
  if (closed.shown || closed.focus !== "mobile-nav") report(`mobile menu after Escape: ${JSON.stringify(closed)}`);

  await page.goto(`${BASE}/en/can-you-help`, { waitUntil: "load" });
  const form = page.locator("form");
  await form.locator("button[type=submit]").click();
  await page.waitForTimeout(100);
  const invalid = await form.locator("[aria-invalid=true]").count();
  const focused = await page.evaluate(() => document.activeElement?.getAttribute("aria-invalid"));
  if (invalid < 8) report(`empty form submit marked ${invalid} fields invalid`);
  if (focused !== "true") report("first invalid field did not receive focus");
  await page.fill("input[name=fullName]", "QA Test");
  await page.fill("input[name=organization]", "QA Org");
  await page.fill("input[name=role]", "QA");
  await page.fill("input[name=country]", "Nowhere");
  await page.fill("input[name=expertise]", "testing");
  await page.fill("input[name=website]", "not-a-url");
  await page.fill("textarea[name=relevance]", "QA run");
  await page.fill("input[name=contact]", "invalid");
  await form.locator("button[type=submit]").click();
  const names = await form.locator("[aria-invalid=true]").evaluateAll((els) => els.map((e) => e.getAttribute("name") || e.type));
  if (names.join() !== "website,contact,checkbox") report(`format validation flagged: ${names.join(",")}`);
  await page.fill("input[name=website]", "https://example.org");
  await page.fill("input[name=contact]", "qa@example.invalid");
  await page.check("input[type=checkbox]");
  await form.locator("button[type=submit]").click();
  await page.waitForTimeout(200);
  const preview = await page.locator("pre").textContent().catch(() => "");
  if (!preview.includes("QA Org")) report("review step did not render the message preview");
  // Stop here. The send button is never clicked.
  await ctx.close();
  console.log("checked mobile menu and form validation (review step only, nothing sent)");
}

await browser.close();
if (problems.length) {
  console.log(`\n${problems.length} problem(s) found`);
  process.exit(1);
}
console.log("\nQA sweep passed");
