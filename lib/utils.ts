import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getOscillatorType = (): OscillatorType | undefined => {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const oscillatorParam = urlParams.get("oscillator");
    if (oscillatorParam) {
      const validTypes: OscillatorType[] = [
        "sine",
        "square",
        "sawtooth",
        "triangle",
      ];
      if (validTypes.includes(oscillatorParam as OscillatorType)) {
        return oscillatorParam as OscillatorType;
      }
    }
  }
};
