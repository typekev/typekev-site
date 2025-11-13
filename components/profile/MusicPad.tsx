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
      className={`grid grid-cols-3 md:grid-cols-9 lg:grid-cols-3 gap-2.5 transition-all ${
        revealedKeys.size === 0
          ? "md:-mr-48 lg:-mb-2.5"
          : revealedKeys.size === 1
          ? "md:-mr-32"
          : revealedKeys.size === 2
          ? "md:-mr-16"
          : ""
      } lg:mr-0`}
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
          className={`size-14 font-black uppercase animate-in fade-in slide-in-from-bottom-2 ${
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
          className={
            revealedKeys.has(key as Key) ? "" : "h-0 overflow-visible inline-block opacity-0"
          }
          onClick={() => revealKey(key as Key)}
          onMouseDown={() => revealKey(key as Key)}
        >
          <Button
            onMouseDown={() => startNote(freq)}
            onMouseUp={() => stopNote(freq)}
            onMouseLeave={() => stopNote(freq)}
            variant="glass"
            size="lg-icon"
            className={`size-14 font-black uppercase border-secondary dark:border-secondary text-secondary shadow-secondary/25 active:bg-secondary/20 dark:active:bg-secondary/50 animate-in fade-in slide-in-from-bottom-2 ${
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
        className={revealedKeys.has("O") ? "" : "h-0 overflow-visible inline-block opacity-0"}
        onClick={() => revealKey("O")}
      >
        <Button
          onClick={nextOctave}
          variant="glass"
          size="lg-icon"
          className={`size-14 font-black uppercase border-accent dark:border-accent text-accent shadow-accent/25 active:bg-accent/20 dark:active:bg-accent/50 animate-in fade-in slide-in-from-bottom-2 ${
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
