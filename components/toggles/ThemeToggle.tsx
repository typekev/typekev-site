"use client";

import { useCallback, useEffect, useEffectEvent, useState } from "react";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { applyTheme, getTheme, storeTheme, type Theme } from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  const handleThemeChange = useEffectEvent((e: MediaQueryListEvent) =>
    setTheme(getTheme() ?? (e.matches ? "dark" : "light"))
  );
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    handleThemeChange({ matches: mql.matches } as MediaQueryListEvent);
    mql.addEventListener("change", handleThemeChange);

    return () => {
      mql.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    storeTheme(newTheme);
  }, [theme]);

  return (
    <Button variant="glass" size="lg-icon" onClick={toggleTheme} aria-label="Toggle theme">
      <Moon className={`size-5 ${theme === "light" ? "block" : "hidden"}`} />
      <Sun className={`size-5 ${theme === "dark" ? "block" : "hidden"}`} />
    </Button>
  );
}
