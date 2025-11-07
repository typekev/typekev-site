"use client";

import { type Freq, useAudio } from "@/hooks/useAudio";

import { Button } from "../ui/button";

const keys: Record<string, Freq> = {
  Q: "C",
  W: "D",
  E: "E",
  R: "F",
  T: "G",
  Y: "A",
};

const hiddenKeys: Record<string, Freq> = {
  U: "B",
  I: "NextC",
};

export function MusicPad() {
  const { playNote, nextOctave } = useAudio();

  return (
    <fieldset className="grid grid-cols-3 gap-2.5">
      <legend className="sr-only">
        Music Pad controlled by QWERTYUIO keys
      </legend>
      {Object.entries(keys).map(([key, freq]) => (
        <Button
          key={key}
          onClick={() => playNote(freq)}
          variant="glass"
          size="lg-icon"
          className="size-14 font-black uppercase"
        >
          {key}
        </Button>
      ))}
      {Object.entries(hiddenKeys).map(([key, freq]) => (
        <Button
          key={key}
          onClick={() => playNote(freq)}
          variant="glass"
          size="lg-icon"
          className="size-14 font-black uppercase border-secondary dark:border-secondary text-secondary shadow-secondary/25 active:bg-secondary/20 dark:active:bg-secondary/50"
        >
          {key}
        </Button>
      ))}
      <Button
        onClick={nextOctave}
        variant="glass"
        size="lg-icon"
        className="size-14 font-black uppercase border-accent dark:border-accent text-accent shadow-accent/25 active:bg-accent/20 dark:active:bg-accent/50"
      >
        O
      </Button>
    </fieldset>
  );
}
