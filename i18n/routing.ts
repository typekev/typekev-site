import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { ComponentPropsWithRef } from "react";

export const routing = defineRouting({
  locales: ["en", "de", "fr", "lu"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

export type LinkProps = ComponentPropsWithRef<typeof Link>;
