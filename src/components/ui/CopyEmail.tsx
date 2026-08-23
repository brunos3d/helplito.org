"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { EmailLink } from "./EmailLink";

type Props = {
  email: string;
  className?: string;
  tone?: "light" | "dark";
};

/** The email as a mailto link with a copy affordance. */
export function CopyEmail({ email, className, tone = "dark" }: Props) {
  const t = useTranslations("common");
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard unavailable. The mailto link still works. */
    }
  }

  const light = tone === "light";

  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}>
      <EmailLink email={email} className={cn("font-mono text-base", light ? "text-cream-50" : "text-navy-900")} />
      <button
        type="button"
        onClick={copy}
        className={cn(
          "eyebrow border px-2.5 py-1 transition-colors",
          light
            ? "border-cream-50/40 text-cream-50/80 hover:border-cream-50 hover:text-cream-50"
            : "border-navy-900/30 text-ink-700 hover:border-navy-900 hover:text-navy-900",
        )}
        aria-live="polite"
      >
        {copied ? t("copied") : t("copyEmail")}
      </button>
    </div>
  );
}
