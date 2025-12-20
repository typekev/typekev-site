import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const parts = pathname.split("/").filter(Boolean);

  const locale = parts[0];
  const hasExtraSegments = parts.length > 1;

  if (routing.locales.includes(locale as (typeof routing.locales)[number]) && hasExtraSegments) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.rewrite(url);
  }

  const handleI18nRouting = createMiddleware(routing);
  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/", "/:locale(en|de|fr|lu)", "/:locale(en|de|fr|lu)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
