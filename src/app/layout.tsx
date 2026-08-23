import type { ReactNode } from "react";

/**
 * Root layout. The html and body elements live in the [locale] layout so the
 * lang attribute can be set per locale.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
