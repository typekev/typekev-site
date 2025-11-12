"use client";

import { useCallback, useEffect, useEffectEvent, useRef, useState } from "react";

import { Moon, Sun, SunMoon } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Theme } from "@/lib/theme";
import { applyTheme, deleteTheme, getSystemTheme, getTheme, storeTheme } from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [showResetButton, setShowResetButton] = useState<boolean>(false);
  const [hasReset, setHasReset] = useState<boolean>(false);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleThemeChange = useEffectEvent((e: MediaQueryListEvent) =>
    setTheme(getTheme() ?? (e.matches ? "dark" : "light"))
  );
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    handleThemeChange({ matches: mql.matches } as MediaQueryListEvent);
    mql.addEventListener("change", handleThemeChange);

    return () => {
      mql.removeEventListener("change", handleThemeChange);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const showResetButtonTemporarily = useCallback(() => {
    if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);

    setShowResetButton(true);
    resetTimeoutRef.current = setTimeout(() => setShowResetButton(false), 3000);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    storeTheme(newTheme);
    setHasReset(false);
    showResetButtonTemporarily();
  }, [theme, showResetButtonTemporarily]);

  const resetTheme = useCallback(() => {
    deleteTheme();
    setTheme(getSystemTheme());
    setHasReset(true);
    setShowResetButton(false);

    if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
  }, []);

  return (
    <menu className="grid">
      <li className="z-2">
        <Button variant="glass" size="lg-icon" onClick={toggleTheme} aria-label="Toggle theme">
          <Moon className={`size-5 ${theme === "light" ? "block" : "hidden"}`} />
          <Sun className={`size-5 ${theme === "dark" ? "block" : "hidden"}`} />
        </Button>
      </li>
      <li
        className={`transition-all duration-300 ease-in-out pt-3 z-1 ${
          showResetButton
            ? "mt-0 opacity-100 scale-100"
            : "-mt-15 opacity-0 scale-0 hover:mt-0 hover:opacity-100 hover:scale-100"
        } ${hasReset ? "pointer-events-none" : ""}`}
      >
        <Button
          variant="glass"
          size="lg-icon"
          onClick={resetTheme}
          aria-label="Reset theme to system default"
        >
          <SunMoon className="size-6" />
        </Button>
      </li>
    </menu>
  );
}
