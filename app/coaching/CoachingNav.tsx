"use client";

import { useEffect, useRef } from "react";

export function CoachingNav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const stickyTop = Number.parseFloat(getComputedStyle(nav).top);
      nav.dataset.stuck = String(nav.getBoundingClientRect().top <= stickyTop);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.body);
    update();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="On this page"
      className="sticky top-0 z-20 hidden h-24 w-full flex-wrap justify-center gap-x-10 gap-y-1 self-start border-b border-foreground/15 bg-transparent py-2 text-base font-semibold data-[stuck=true]:bg-background/90 lg:flex"
    >
      <a
        className="inline-flex min-h-11 items-center justify-center text-foreground/75 underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:text-foreground"
        href="#the-coaching"
      >
        How it works
      </a>
      <a
        className="inline-flex min-h-11 items-center justify-center text-foreground/75 underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:text-foreground"
        href="#my-experience"
      >
        About your coach
      </a>
      <a
        className="inline-flex min-h-11 items-center justify-center text-foreground/75 underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:text-foreground"
        href="#start-coaching"
      >
        Pricing
      </a>
    </nav>
  );
}
