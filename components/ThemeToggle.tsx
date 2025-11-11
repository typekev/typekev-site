"use client";

import { useCallback, useEffect, useEffectEvent, useState } from "react";

import { Moon, Sun, Volume2, VolumeX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getMutedState } from "@/lib/audio";
import { getTheme, type Theme } from "@/lib/theme";
import { MuteChangeEvent } from "@/types/types";

export default function ThemeToggle() {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [theme, setTheme] = useState<Theme>("light");

  const initMuteState = useEffectEvent(() => setIsMuted(getMutedState()));
  useEffect(() => {
    initMuteState();

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) =>
      setTheme(getTheme() ?? (e.matches ? "dark" : "light"));

    handleThemeChange({ matches: mql.matches } as MediaQueryListEvent);
    mql.addEventListener("change", handleThemeChange);
    return () => {
      mql.removeEventListener("change", handleThemeChange);
    };
  }, []);

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
      <Button variant="glass" size="lg-icon" onClick={toggleTheme} aria-label="Toggle theme">
        <Moon className={`size-5 ${theme === "light" ? "block" : "hidden"}`} />
        <Sun className={`size-5 ${theme === "dark" ? "block" : "hidden"}`} />
      </Button>
    </menu>
  );
}
