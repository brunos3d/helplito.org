import { cn } from "@/lib/utils";

/**
 * Mark + wordmark. The mark is the same drawing used for the favicon
 * (src/app/icon.svg): a navy square, a ring, an amber bearing line.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className={cn("h-7 w-7", className)}>
      <rect width="32" height="32" fill="#0b1a2b" />
      <circle cx="16" cy="16" r="9.5" fill="none" stroke="#faf8f3" strokeWidth="1.5" />
      <path d="M16 16 L23 9" stroke="#e4b64f" strokeWidth="2" strokeLinecap="square" />
      <circle cx="16" cy="16" r="2.2" fill="#e4b64f" />
    </svg>
  );
}

export function Wordmark({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark />
      <span
        className={cn(
          "font-display text-[1.35rem] leading-none tracking-tight",
          tone === "dark" ? "text-navy-900" : "text-cream-50",
        )}
      >
        Help Lito
      </span>
    </span>
  );
}
