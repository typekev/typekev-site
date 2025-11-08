"use client";

import { useEffect, useState } from "react";

import { type Freq, useAudio } from "@/hooks/useAudio";

import { Button } from "../ui/button";

type Key = "Q" | "W" | "E" | "R" | "T" | "Y" | "U" | "I" | "O";

const keys: Partial<Record<Key, Freq>> = {
  Q: "C",
  W: "D",
  E: "E",
  R: "F",
  T: "G",
  Y: "A",
};

const hiddenKeys: Partial<Record<Key, Freq>> = {
  U: "B",
  I: "NextC",
};

export function MusicPad() {
  const { startNote, stopNote, nextOctave, isMuted } = useAudio();
  const [pressedKeys, setPressedKeys] = useState<Set<Key>>(new Set());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase() as Key;
      if ((keys[key] || hiddenKeys[key] || key === "O") && !event.repeat) {
        setPressedKeys((prev) => new Set(prev).add(key));
        if (keys[key]) return startNote(keys[key]);
        if (hiddenKeys[key]) return startNote(hiddenKeys[key]);
        if (key === "O") return nextOctave();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
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
  }, [nextOctave, startNote, stopNote]);

  return (
    <fieldset className="flex flex-wrap justify-center md:grid md:grid-cols-9 lg:grid-cols-3 gap-2.5">
      <legend className="sr-only">
        Music Pad controlled by QWERTYUIO keys
      </legend>
      {Object.entries(keys).map(([key, freq]) => (
        <Button
          key={key}
          onMouseDown={() => startNote(freq)}
          onMouseUp={() => stopNote(freq)}
          variant="glass"
          size="lg-icon"
          className={`size-14 font-black uppercase ${
            pressedKeys.has(key as Key) && !isMuted ? "active" : ""
          }`}
          disabled={isMuted}
        >
          {key}
        </Button>
      ))}
      {Object.entries(hiddenKeys).map(([key, freq]) => (
        <Button
          key={key}
          onMouseDown={() => startNote(freq)}
          onMouseUp={() => stopNote(freq)}
          variant="glass"
          size="lg-icon"
          className={`size-14 font-black uppercase border-secondary dark:border-secondary text-secondary shadow-secondary/25 active:bg-secondary/20 dark:active:bg-secondary/50 ${
            pressedKeys.has(key as Key) && !isMuted ? "active" : ""
          }`}
          disabled={isMuted}
        >
          {key}
        </Button>
      ))}
      <Button
        onClick={nextOctave}
        variant="glass"
        size="lg-icon"
        className={`size-14 font-black uppercase border-accent dark:border-accent text-accent shadow-accent/25 active:bg-accent/20 dark:active:bg-accent/50 ${
          pressedKeys.has("O") && !isMuted ? "active" : ""
        }`}
        disabled={isMuted}
      >
        O
      </Button>
    </fieldset>
  );
}
