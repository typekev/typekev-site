"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { delay, getOscillatorType } from "@/lib/utils";
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

interface ActiveNote {
  oscillator: OscillatorNode;
  gainNode: GainNode;
}

export function useAudio() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const activeNotesRef = useRef<Map<string, ActiveNote>>(new Map());
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

  const startNote = useCallback(
    (note: Freq) => {
      if (!audioContextRef.current || isMuted) return;

      const noteKey = `${note}-${currentOctave}`;
      if (activeNotesRef.current.has(noteKey)) return;

      const frequency = baseC4Frequencies[note] * octaves[currentOctave];

      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      oscillator.type = getOscillatorType() || "square";
      oscillator.frequency.setValueAtTime(
        frequency,
        audioContextRef.current.currentTime
      );

      gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);

      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      oscillator.start();

      activeNotesRef.current.set(noteKey, { oscillator, gainNode });
    },
    [currentOctave, isMuted]
  );

  const stopNote = useCallback(
    (note: Freq) => {
      const noteKey = `${note}-${currentOctave}`;
      const activeNote = activeNotesRef.current.get(noteKey);

      if (activeNote && audioContextRef.current) {
        const { oscillator, gainNode } = activeNote;

        const fadeOutDuration = 0.75;
        gainNode.gain.exponentialRampToValueAtTime(
          0.0001,
          audioContextRef.current.currentTime + fadeOutDuration
        );

        oscillator.stop(audioContextRef.current.currentTime + fadeOutDuration);
        activeNotesRef.current.delete(noteKey);
      }
    },
    [currentOctave]
  );

  const playNote = useCallback(
    (note: Freq, octave = currentOctave, fadeOutDuration = 0.75) => {
      if (audioContextRef.current && !isMuted) {
        const frequency = baseC4Frequencies[note] * octaves[octave];

        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();

        oscillator.type = getOscillatorType() || "square";
        oscillator.frequency.setValueAtTime(
          frequency,
          audioContextRef.current.currentTime
        );

        gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);

        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          audioContextRef.current.currentTime + fadeOutDuration
        );

        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        oscillator.start();
        oscillator.stop(audioContextRef.current.currentTime + fadeOutDuration);
      }
    },
    [currentOctave, isMuted]
  );

  const stopAllNotes = useCallback(() => {
    if (!audioContextRef.current) return;

    for (const [, activeNote] of activeNotesRef.current) {
      const { oscillator, gainNode } = activeNote;

      const fadeOutDuration = 0.2;
      gainNode.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContextRef.current.currentTime + fadeOutDuration
      );

      oscillator.stop(audioContextRef.current.currentTime + fadeOutDuration);
    }

    activeNotesRef.current.clear();
  }, []);

  const playChord = useCallback(
    async (
      notes: Freq[],
      octave = currentOctave,
      timeout = 75,
      fadeOutDuration = 0.75
    ) => {
      for (const note of notes) {
        playNote(note, octave, fadeOutDuration);
        await delay(timeout);
      }
    },
    [playNote, currentOctave]
  );

  const nextOctave = useCallback(() => {
    stopAllNotes();

    const octaveKeys = Object.keys(octaves) as Octave[];
    setCurrentOctave((prevOctave) => {
      const currentIndex = octaveKeys.indexOf(prevOctave);
      const nextOctave = octaveKeys[(currentIndex + 1) % octaveKeys.length];
      playChord(["C", "G"], nextOctave);
      return nextOctave;
    });
  }, [stopAllNotes, playChord]);

  return { playNote, startNote, stopNote, playChord, nextOctave, isMuted };
}
