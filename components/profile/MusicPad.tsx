"use client";

import { useEffect, useState } from "react";

import { useOscillator } from "@/hooks/useOscillator";
import type { Note } from "@/lib/audio";

import { Button } from "../ui/button";

export type Key = "Q" | "W" | "E" | "R" | "T" | "Y" | "U" | "I" | "O";
export const keys: Partial<Record<Key, Note>> = {
  Q: "C",
  W: "D",
  E: "E",
  R: "F",
  T: "G",
  Y: "A",
};

const hiddenKeys: Partial<Record<Key, Note>> = {
  U: "B",
  I: "NextC",
};

const rowLayouts = [
  "sm:max-w-94 sm:grid-cols-6",
  "sm:max-w-110 sm:grid-cols-7",
  "sm:max-w-126 sm:grid-cols-8",
  "sm:max-w-142 sm:grid-cols-9",
] as const;

export function MusicPad() {
  const { startNote, stopNote, nextOctave, oscillatorParam, isMuted } = useOscillator();
  const [pressedKeys, setPressedKeys] = useState<Set<Key>>(new Set());
  const [revealedKeys, setRevealedKeys] = useState<Set<Key>>(new Set());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!oscillatorParam) return;
      const key = event.key.toUpperCase() as Key;
      if ((keys[key] || hiddenKeys[key] || key === "O") && !event.repeat) {
        setPressedKeys((prev) => new Set(prev).add(key));
        if (keys[key]) return startNote(keys[key]);
        if (hiddenKeys[key]) {
          setRevealedKeys((prev) => new Set(prev).add(key));
          return startNote(hiddenKeys[key]);
        }
        if (key === "O") {
          setRevealedKeys((prev) => new Set(prev).add("O"));
          return nextOctave();
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (!oscillatorParam) return;
      const key = event.key.toUpperCase() as Key;
      if (keys[key] || hiddenKeys[key] || key === "O") {
        setPressedKeys((prev) => {
          const newSet = new Set(prev);
          newSet.delete(key);
          return newSet;
        });
        if (keys[key]) return stopNote(keys[key]);
        if (hiddenKeys[key]) return stopNote(hiddenKeys[key]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [nextOctave, startNote, stopNote, oscillatorParam]);

  if (!oscillatorParam) {
    return null;
  }

  const revealKey = (key: Key) => setRevealedKeys((prev) => new Set(prev).add(key as Key));

  return (
    <fieldset
      className={`mx-auto grid w-full max-w-47 min-w-0 grid-cols-3 gap-2.5 sm:gap-2 ${rowLayouts[revealedKeys.size]}`}
    >
      <legend className="sr-only">Music Pad controlled by QWERTYUIO keys</legend>
      {Object.entries(keys).map(([key, freq], index) => (
        <Button
          key={key}
          onMouseDown={() => startNote(freq)}
          onMouseUp={() => stopNote(freq)}
          onMouseLeave={() => stopNote(freq)}
          variant="glass"
          size="lg-icon"
          className={`aspect-square h-auto w-full min-w-0 animate-in font-black uppercase fade-in slide-in-from-bottom-2 ${
            pressedKeys.has(key as Key) && !isMuted ? "active" : ""
          }`}
          style={{
            animationDuration: `${(1 + index) * 200}ms`,
          }}
          disabled={isMuted}
        >
          {key}
        </Button>
      ))}
      {Object.entries(hiddenKeys).map(([key, freq], index) => (
        <label
          key={key}
          className={revealedKeys.has(key as Key) ? "" : "opacity-0 sm:hidden"}
          onClick={() => revealKey(key as Key)}
          onMouseDown={() => revealKey(key as Key)}
        >
          <Button
            onMouseDown={() => startNote(freq)}
            onMouseUp={() => stopNote(freq)}
            onMouseLeave={() => stopNote(freq)}
            variant="glass"
            size="lg-icon"
            className={`aspect-square h-auto w-full min-w-0 animate-in border-secondary font-black text-secondary uppercase shadow-secondary/25 fade-in slide-in-from-bottom-2 active:bg-secondary/20 dark:border-secondary dark:active:bg-secondary/50 ${
              pressedKeys.has(key as Key) && !isMuted ? "active" : ""
            }`}
            style={{
              animationDuration: `${(1 + Object.keys(keys).length + index) * 300}ms`,
            }}
            disabled={isMuted}
          >
            {key}
          </Button>
        </label>
      ))}
      <label
        className={revealedKeys.has("O") ? "" : "opacity-0 sm:hidden"}
        onClick={() => revealKey("O")}
      >
        <Button
          onClick={nextOctave}
          variant="glass"
          size="lg-icon"
          className={`aspect-square h-auto w-full min-w-0 animate-in border-accent font-black text-accent uppercase shadow-accent/25 fade-in slide-in-from-bottom-2 active:bg-accent/20 dark:border-accent dark:active:bg-accent/50 ${
            pressedKeys.has("O") && !isMuted ? "active" : ""
          }`}
          style={{
            animationDuration: `${
              (1 + Object.keys(keys).length + Object.keys(hiddenKeys).length) * 300
            }ms`,
          }}
          disabled={isMuted}
        >
          O
        </Button>
      </label>
    </fieldset>
  );
}
