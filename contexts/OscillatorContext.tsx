"use client";

import {
  createContext,
  Suspense,
  useCallback,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";

import type { Note, Octave } from "@/lib/audio";
import {
  createAudioContext,
  getFreq,
  getMutedState,
  octaves,
  Oscillator,
  validOscillators,
} from "@/lib/audio";
import { delay } from "@/lib/utils";
import type { MuteChangeEvent } from "@/types/types";

export type OscillatorContextType = Readonly<{
  playNote: (note: Note, octave?: Octave, fade?: number) => void;
  startNote: (note: Note) => void;
  stopNote: (note: Note) => void;
  playArpeggio: (notes: Note[], octave?: Octave, timeout?: number, fade?: number) => Promise<void>;
  nextOctave: () => void;
  oscillatorParam: OscillatorType | null;
  isMuted: boolean;
}>;

export const OscillatorContext = createContext<OscillatorContextType | null>(null);

type ActiveFreq = Readonly<{ oscillator: OscillatorNode; gain: GainNode }>;

export function OscillatorProvider({ children }: React.PropsWithChildren) {
  const audioRef = useRef<AudioContext | null>(null);
  const activeFreqsRef = useRef<Map<number, ActiveFreq>>(new Map());
  const [currentOctave, setCurrentOctave] = useState<Octave>("o4");
  const [oscillatorParam, setOscillatorParam] = useState<OscillatorType | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const initMuteState = useEffectEvent(() => setIsMuted(getMutedState()));
  useEffect(() => {
    initMuteState();

    const handleMuteChange = (event: MuteChangeEvent) => setIsMuted(event.detail.isMuted);
    window.addEventListener("mutechange", handleMuteChange as EventListener);

    audioRef.current = createAudioContext();

    return () => {
      window.removeEventListener("mutechange", handleMuteChange as EventListener);
      audioRef.current?.close();
    };
  }, []);

  const startNote = useCallback(
    (note: Note) => {
      if (audioRef.current && !isMuted) {
        const freq = getFreq(note, currentOctave);

        if (!activeFreqsRef.current.has(freq)) {
          const nodes = Oscillator.start(audioRef.current, freq);
          activeFreqsRef.current.set(freq, nodes);
        }
      }
    },
    [currentOctave, isMuted]
  );

  const stopNote = useCallback(
    (note: Note) => {
      if (audioRef.current) {
        const freq = getFreq(note, currentOctave);
        const activeFreq = activeFreqsRef.current.get(freq);

        if (activeFreq) {
          Oscillator.stop(audioRef.current, activeFreq.oscillator, activeFreq.gain);
          activeFreqsRef.current.delete(freq);
        }
      }
    },
    [currentOctave]
  );

  const playNote = useCallback(
    (note: Note, octave = currentOctave, fade = 0.75) => {
      if (audioRef.current && !isMuted) {
        const freq = getFreq(note, octave);
        const { oscillator, gain } = Oscillator.start(audioRef.current, freq);
        Oscillator.stop(audioRef.current, oscillator, gain, fade);
      }
    },
    [currentOctave, isMuted]
  );

  const stopAllNotes = useCallback(() => {
    if (audioRef.current) {
      for (const [, activeFreq] of activeFreqsRef.current) {
        Oscillator.stop(audioRef.current, activeFreq.oscillator, activeFreq.gain, 0.2);
      }

      activeFreqsRef.current.clear();
    }
  }, []);

  const playArpeggio = useCallback(
    async (notes: Note[], octave = currentOctave, timeout = 75, fade = 0.75) => {
      for (const note of notes) {
        playNote(note, octave, fade);
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
      playArpeggio(["C", "G"], nextOctave);
      return nextOctave;
    });
  }, [stopAllNotes, playArpeggio]);

  const value: OscillatorContextType = {
    playNote,
    startNote,
    stopNote,
    playArpeggio,
    nextOctave,
    oscillatorParam,
    isMuted,
  };

  return (
    <OscillatorContext.Provider value={value}>
      <Suspense>
        <OscillatorWatcher setOscillatorParam={setOscillatorParam} />
      </Suspense>
      {children}
    </OscillatorContext.Provider>
  );
}

interface OscillatorWatcherProps {
  setOscillatorParam: (param: OscillatorType | null) => void;
}

export function OscillatorWatcher({ setOscillatorParam }: OscillatorWatcherProps) {
  const searchParams = useSearchParams();
  const oscillatorParam = searchParams.get("oscillator");

  useEffect(() => {
    setOscillatorParam(
      validOscillators.includes(oscillatorParam as OscillatorType)
        ? (oscillatorParam as OscillatorType)
        : null
    );
  }, [oscillatorParam, setOscillatorParam]);

  return null;
}
