"use client";

import { useEffect, useRef } from "react";

export function StickyHeader({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateOffset = () => {
      header.style.top = `${Math.min(48, window.innerHeight - header.offsetHeight - 24)}px`;
    };
    const observer = new ResizeObserver(updateOffset);
    observer.observe(header);
    window.addEventListener("resize", updateOffset);
    updateOffset();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="z-1 flex min-w-0 flex-col items-center gap-8 lg:sticky lg:top-12 lg:h-fit lg:items-start lg:self-start"
    >
      {children}
    </header>
  );
}
