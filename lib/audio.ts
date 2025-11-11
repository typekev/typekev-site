const baseC4Freqs = {
  C: 261.63,
  D: 293.66,
  E: 329.63,
  F: 349.23,
  G: 392.0,
  A: 440.0,
  B: 493.88,
  NextC: 523.25,
} as const;
export type Note = keyof typeof baseC4Freqs;
export type Freq = (typeof baseC4Freqs)[Note] | number;

export const octaves = { o2: 0.25, o3: 0.5, o4: 1, o5: 2, o6: 4, o7: 8 };
export type Octave = keyof typeof octaves;

export const getMutedState = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("muted") === "true";
  }
  return false;
};

export const createAudioContext = () =>
  new (window.AudioContext ||
    (
      window as typeof window & {
        webkitAudioContext?: typeof AudioContext;
      }
    ).webkitAudioContext)();

const getOscillatorType = (): OscillatorType | undefined => {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const oscillatorParam = urlParams.get("oscillator");
    if (oscillatorParam) {
      const validTypes: OscillatorType[] = ["sine", "square", "sawtooth", "triangle"];
      if (validTypes.includes(oscillatorParam as OscillatorType)) {
        return oscillatorParam as OscillatorType;
      }
    }
  }
};

export const getFreq = (note: Note, octave: Octave) => baseC4Freqs[note] * octaves[octave];

export const Oscillator = {
  start: (audio: AudioContext, freq: Freq) => {
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.type = getOscillatorType() || "square";
    oscillator.frequency.setValueAtTime(freq, audio.currentTime);

    gain.gain.setValueAtTime(0.1, audio.currentTime);

    oscillator.connect(gain);
    gain.connect(audio.destination);

    oscillator.start();

    return { oscillator, gain };
  },
  stop: (audio: AudioContext, oscillator: OscillatorNode, gain: GainNode, fade = 0.75) => {
    const time = audio.currentTime + fade;
    gain.gain.exponentialRampToValueAtTime(0.0001, time);

    oscillator.stop(time);
  },
};
