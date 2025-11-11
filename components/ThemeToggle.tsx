"use client";

import { useCallback, useEffect, useState } from "react";

import { Moon, Sun, Volume2, VolumeX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MuteChangeEvent } from "@/types/types";

type Modes = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Modes>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Modes | null;
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
        <VolumeX className={`size-5 ${isMuted ? "block" : "hidden"}`} />
        <Volume2 className={`size-5 ${isMuted ? "hidden" : "block"}`} />
      </Button>
      <Button
        variant="glass"
        size="lg-icon"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <Moon className={`size-5 ${theme === "light" ? "block" : "hidden"}`} />
        <Sun className={`size-5 ${theme === "dark" ? "block" : "hidden"}`} />
      </Button>
    </menu>
  );
}
