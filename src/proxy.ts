import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip API routes, the dev-only /dev/og templates, Next internals and static files.
  matcher: ["/((?!api|dev/og|_next|_vercel|.*\\..*).*)"],
};
