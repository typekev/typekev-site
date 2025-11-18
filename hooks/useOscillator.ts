import { useContext } from "react";

import { OscillatorContext, type OscillatorContextType } from "@/contexts/OscillatorContext";

export function useOscillator(): OscillatorContextType {
  const context = useContext(OscillatorContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }

  return context;
}
