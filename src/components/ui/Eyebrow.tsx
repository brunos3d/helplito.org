import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  tone?: "amber" | "muted" | "light";
  index?: string;
  as?: "p" | "span" | "h2" | "h3";
};

const tones = {
  amber: "text-amber-600",
  muted: "text-ink-500",
  light: "text-cream-200/70",
};

/** Small mono label with an optional section index. */
export function Eyebrow({ children, className, tone = "amber", index, as: Tag = "p" }: Props) {
  return (
    <Tag className={cn("eyebrow flex items-center gap-3", tones[tone], className)}>
      {index && <span className="tabular-nums">{index}</span>}
      {index && <span aria-hidden className="h-px w-5 bg-current opacity-50" />}
      <span>{children}</span>
    </Tag>
  );
}
