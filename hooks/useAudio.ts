"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { MuteChangeEvent } from "@/types/types";

const octaves = { o2: 0.25, o3: 0.5, o4: 1, o5: 2, o6: 4, o7: 8 };
type Octave = keyof typeof octaves;

const baseC4Frequencies = {
  C: 261.63,
  D: 293.66,
  E: 329.63,
  F: 349.23,
  G: 392.0,
  A: 440.0,
  B: 493.88,
  NextC: 523.25,
};
export type Freq = keyof typeof baseC4Frequencies;

export function useAudio() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const [currentOctave, setCurrentOctave] = useState<Octave>("o4");
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("muted") === "true";
    }
    return false;
  });

  useEffect(() => {
    const handleMuteChange = (event: MuteChangeEvent) => {
      setIsMuted(event.detail.isMuted);
    };

    window.addEventListener("mutechange", handleMuteChange as EventListener);

    return () => {
      window.removeEventListener(
        "mutechange",
        handleMuteChange as EventListener
      );
    };
  }, []);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext ||
      (
        window as typeof window & {
          webkitAudioContext?: typeof AudioContext;
        }
      ).webkitAudioContext)();

    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const playNote = useCallback(
    (note: Freq) => {
      if (audioContextRef.current && !isMuted) {
        const frequency = baseC4Frequencies[note] * octaves[currentOctave];

        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(
          frequency,
          audioContextRef.current.currentTime
        );

        gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        oscillator.start();
        oscillator.stop(audioContextRef.current.currentTime + 0.5);
      }
    },
    [currentOctave, isMuted]
  );

  const nextOctave = useCallback(() => {
    const octaveKeys = Object.keys(octaves) as Octave[];
    setCurrentOctave((prevOctave) => {
      const currentIndex = octaveKeys.indexOf(prevOctave);
      return octaveKeys[(currentIndex + 1) % octaveKeys.length];
    });
  }, []);

  return { playNote, nextOctave, isMuted };
}
