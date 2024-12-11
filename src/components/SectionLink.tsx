"use client";
import { forwardRef, useCallback, useEffect } from "react";

import { useIsRouteActive } from "@/hooks/useIsRouteActive";
import { Link, LinkProps } from "i18n/routing";

interface SectionLinkProps extends Omit<LinkProps, "onClick"> {
  href: string;
}

const SectionLink = forwardRef<HTMLAnchorElement, SectionLinkProps>(({ href, className, ...props }, ref) => {
  const active = useIsRouteActive(href);
  const scroll = useCallback(() => document.getElementById(href.split("/")[1])?.scrollIntoView(), [href]);

  useEffect(() => {
    if (active) scroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cn = `${className || ""} ${active ? "active" : ""}`.trim();
  return <Link ref={ref} href={href} className={cn} onClick={scroll} {...props} scroll={false} role="button" />;
});

SectionLink.displayName = "SectionLink";
export { SectionLink };
