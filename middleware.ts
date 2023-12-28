import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  defaultLocale: "en",
  locales: ["de", "en", "fr", "lu"],
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(en|de|fr|lu)/:path*"]
};
