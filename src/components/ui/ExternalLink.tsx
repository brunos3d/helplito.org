import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ExternalIcon } from "./Button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function ExternalLink({ href, children, className, showIcon = true }: Props) {
  const t = useTranslations("common");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("link-underline", className)}
    >
      {children}
      {showIcon && <ExternalIcon className="ml-1.5 inline-block align-[-0.1em] opacity-70" />}
      <span className="sr-only">({t("externalLink")})</span>
    </a>
  );
}
