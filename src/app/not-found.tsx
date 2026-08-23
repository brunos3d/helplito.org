import Link from "next/link";
import { plexMono, plexSans } from "@/lib/fonts";
import "./globals.css";

/** Root not-found for paths outside any locale (the proxy usually redirects first). */
export default function RootNotFound() {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen items-center justify-center bg-cream-50 text-navy-900">
        <div className="px-6 text-center">
          <p className="eyebrow text-amber-600">404</p>
          <h1 className="display mt-4 text-4xl">Page not found</h1>
          <Link href="/en" className="link-underline mt-6 inline-block">
            Help Lito
          </Link>
        </div>
      </body>
    </html>
  );
}
