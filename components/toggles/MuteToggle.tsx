"use client";

import { useCallback, useEffect, useEffectEvent, useState } from "react";

import { Volume2, VolumeX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getMutedState } from "@/lib/audio";
import { MuteChangeEvent } from "@/types/types";

type MuteDetail = MuteChangeEvent["detail"];

export function MuteToggle() {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const initMuteState = useEffectEvent(() => setIsMuted(getMutedState()));
  useEffect(() => {
    initMuteState();
  }, []);

  const toggleMute = useCallback(() => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    localStorage.setItem("muted", nextMuted.toString());

    const muteEvent = new CustomEvent<MuteDetail>("mutechange", { detail: { isMuted: nextMuted } });
    window.dispatchEvent(muteEvent);
  }, [isMuted]);

  return (
    <Button
      variant="glass"
      size="lg-icon"
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      <VolumeX className={`size-5 ${isMuted ? "block" : "hidden"}`} />
      <Volume2 className={`size-5 ${isMuted ? "hidden" : "block"}`} />
    </Button>
  );
}
