import type { ReactNode } from "react";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
};

/** Shared header for inner pages. Light, bordered, compact. */
export function PageHeader({ eyebrow, title, lead, children }: Props) {
  return (
    <header className="border-b border-navy-900/15 bg-cream-100 pt-28 pb-12 sm:pt-36 sm:pb-16">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="display mt-4 text-3xl text-navy-900 sm:text-4xl lg:text-5xl">{title}</h1>
            {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">{lead}</p>}
          </div>
          {children && <div className="lg:col-span-4">{children}</div>}
        </div>
      </Container>
    </header>
  );
}
