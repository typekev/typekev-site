"use client";
import { useMemo } from "react";

import { usePathname } from "i18n/routing";

export function useIsRouteActive(href: string) {
  const pathname = usePathname();

  const active = useMemo(() => pathname.startsWith(href.split("?")[0]), [pathname, href]);

  return active;
}
