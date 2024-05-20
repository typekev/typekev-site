import createMiddleware from "next-intl/middleware";

export const config = {
  matcher: ["/", "/(en|de|fr|lu)/:path*"],
  locales: ["en", "de", "fr", "lu"],
};

export default createMiddleware({
  defaultLocale: "en",
  locales: config.locales,
  localePrefix: "always",
});
