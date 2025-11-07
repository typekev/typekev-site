"use client";

import { memo, useCallback, useEffect, useState } from "react";

import { Moon, Sun, Volume2, VolumeX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MuteChangeEvent } from "@/types/types";

export const ThemeToggle = memo(function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;
      if (savedTheme) return savedTheme;

      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  const [isMuted, setIsMuted] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedMuted = localStorage.getItem("muted");
      return savedMuted === "true";
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  const toggleMute = useCallback(() => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    localStorage.setItem("muted", String(newMuted));
    window.dispatchEvent(
      new CustomEvent<MuteChangeEvent["detail"]>("mutechange", {
        detail: { isMuted: newMuted },
      })
    );
  }, [isMuted]);

  return (
    <menu className="fixed right-6 top-6 z-50 flex gap-3">
      <Button
        variant="glass"
        size="lg-icon"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="relative z-10 h-5 w-5" />
        ) : (
          <Volume2 className="relative z-10 h-5 w-5" />
        )}
      </Button>
      <Button
        variant="glass"
        size="lg-icon"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="relative z-10 h-5 w-5" />
        ) : (
          <Sun className="relative z-10 h-5 w-5" />
        )}
      </Button>
    </menu>
  );
});
