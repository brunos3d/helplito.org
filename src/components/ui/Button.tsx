import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Variant = "navy" | "amber" | "outline-dark" | "outline-light" | "text";
type Size = "md" | "lg";

/** Rectangular, precise. Actions inside an information system, not a funnel. */
const base =
  "inline-flex items-center justify-center gap-2.5 border font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-3";

const variants: Record<Variant, string> = {
  navy: "border-navy-900 bg-navy-900 text-cream-50 hover:bg-navy-800 hover:border-navy-800",
  amber: "border-amber-400 bg-amber-400 text-navy-950 hover:bg-amber-300 hover:border-amber-300",
  "outline-dark": "border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-cream-50",
  "outline-light": "border-cream-50/60 text-cream-50 hover:border-cream-50 hover:bg-cream-50/10",
  text: "border-transparent px-0 text-current underline underline-offset-4 decoration-current/40 hover:decoration-current",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-[0.95rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps & { href: string };

export function ButtonLink({ href, variant = "navy", size = "md", className, children }: LinkProps) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const isExternal = href.startsWith("http");
  if (isExternal || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} className={cls} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

type NativeButtonProps = CommonProps & ComponentProps<"button">;

export function Button({ variant = "navy", size = "md", className, children, ...rest }: NativeButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], "disabled:cursor-not-allowed disabled:opacity-60", className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      className={cn("h-3.5 w-3.5", className)}
    >
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

export function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
      className={cn("h-3 w-3", className)}
    >
      <path d="M8 4H4v12h12v-4M11 3h6v6M17 3l-8 8" />
    </svg>
  );
}
