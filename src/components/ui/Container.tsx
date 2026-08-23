import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: Props) {
  return (
    <Tag className={cn("mx-auto w-full px-safe-5 sm:px-safe-8", sizes[size], className)}>
      {children}
    </Tag>
  );
}
