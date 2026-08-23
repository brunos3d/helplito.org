"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Wordmark } from "./Wordmark";

const navItems = [
  { href: "/about-lito", key: "aboutLito" },
  { href: "/understanding-cjd", key: "cjd" },
  { href: "/research", key: "research" },
  { href: "/about", key: "about" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    const raf = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // While the menu is open: lock page scroll, take the page out of the tab order
  // and close on Escape, returning focus to the toggle button.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const outside = [document.getElementById("content"), document.querySelector("footer")];
    for (const el of outside) el?.toggleAttribute("inert", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      for (const el of outside) el?.removeAttribute("inert");
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-cream-50 text-navy-900 transition-[border-color] duration-200",
        scrolled || open ? "border-navy-900/15" : "border-transparent",
      )}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-amber-400 focus:px-4 focus:py-2 focus:text-navy-950"
      >
        {t("skipToContent")}
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-safe-5 py-4 sm:px-safe-8">
        <Link href="/" aria-label="Help Lito">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "text-sm transition-colors hover:text-navy-900",
                pathname === item.href ? "text-navy-900 underline underline-offset-[6px]" : "text-ink-700",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitcher className="hidden sm:flex" />
          <Link
            href="/can-you-help"
            className="hidden border border-navy-900 bg-navy-900 px-4 py-2 text-sm font-medium text-cream-50 transition-colors hover:bg-navy-800 sm:inline-flex"
          >
            {t("help")}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-navy-900/30 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn("lg:hidden", open ? "block" : "hidden", "h-[calc(100dvh-4.5rem)] overflow-y-auto bg-cream-50 pb-[env(safe-area-inset-bottom)]")}
      >
        <nav className="flex flex-col px-safe-5 py-4 sm:px-safe-8" aria-label="Mobile">
          {[{ href: "/", key: "home" } as const, ...navItems].map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="display border-b border-navy-900/15 py-4 text-2xl text-navy-900"
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            href="/can-you-help"
            className="mt-6 inline-flex items-center justify-center border border-navy-900 bg-navy-900 px-5 py-3.5 text-base font-medium text-cream-50"
          >
            {t("help")}
          </Link>
          <div className="mt-8 flex items-center justify-between">
            <span className="eyebrow text-ink-500">{t("language")}</span>
            <LanguageSwitcher size="lg" />
          </div>
        </nav>
      </div>
    </header>
  );
}
