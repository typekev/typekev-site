"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import { Moon, Sun, SunMoon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  applyTheme,
  deleteTheme,
  getCurrentTheme,
  getServerTheme,
  storeTheme,
  subscribeTheme,
} from "@/lib/theme";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getCurrentTheme, getServerTheme);
  const [showResetButton, setShowResetButton] = useState<boolean>(false);
  const [hasReset, setHasReset] = useState<boolean>(false);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    applyTheme(getCurrentTheme());
  }, [theme]);

  const showResetButtonTemporarily = useCallback(() => {
    if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);

    setShowResetButton(true);
    resetTimeoutRef.current = setTimeout(() => setShowResetButton(false), 3000);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    storeTheme(newTheme);
    setHasReset(false);
    showResetButtonTemporarily();
  }, [theme, showResetButtonTemporarily]);

  const resetTheme = useCallback(() => {
    deleteTheme();
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
        className={`z-1 pt-3 transition-all duration-300 ease-in-out ${
          showResetButton
            ? "mt-0 scale-100 opacity-100"
            : "-mt-15 scale-0 opacity-0 hover:mt-0 hover:scale-100 hover:opacity-100"
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
