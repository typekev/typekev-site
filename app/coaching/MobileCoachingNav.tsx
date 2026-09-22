"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import { ArrowLeft, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MobileCoachingNav() {
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) menuRef.current?.hidePopover();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <nav aria-label="Coaching navigation" className="fixed top-6 left-6 z-50 lg:hidden">
      <Button variant="glass" size="lg-icon" popoverTarget="coaching-menu" aria-label="Open navigation">
        <Menu className="size-5" aria-hidden="true" />
      </Button>
      <menu
        id="coaching-menu"
        ref={menuRef}
        popover="auto"
        className="fixed inset-auto top-21 left-6 m-0 w-64 max-w-[calc(100vw-3rem)] rounded-2xl border border-foreground/15 bg-background/95 p-2 text-base font-medium text-foreground shadow-lg backdrop-blur-xl"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) menuRef.current?.hidePopover();
        }}
      >
        <li className="mb-1 border-b border-foreground/15 pb-1">
          <Link href="/" className="flex min-h-11 items-center gap-2 rounded-lg px-3 hover:bg-foreground/5">
            <ArrowLeft className="size-4" aria-hidden="true" />Back to keving.me
          </Link>
        </li>
        <li><a href="#the-coaching" className="flex min-h-11 items-center rounded-lg px-3 hover:bg-foreground/5">How it works</a></li>
        <li><a href="#my-experience" className="flex min-h-11 items-center rounded-lg px-3 hover:bg-foreground/5">About your coach</a></li>
        <li><a href="#start-coaching" className="flex min-h-11 items-center rounded-lg px-3 hover:bg-foreground/5">Pricing</a></li>
      </menu>
    </nav>
  );
}
