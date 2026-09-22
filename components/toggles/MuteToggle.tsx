"use client";

import { useCallback, useSyncExternalStore } from "react";

import { Volume2, VolumeX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getMutedState, getServerMutedState, subscribeMutedState } from "@/lib/audio";

export function MuteToggle() {
  const isMuted = useSyncExternalStore(subscribeMutedState, getMutedState, getServerMutedState);

  const toggleMute = useCallback(() => {
    const nextMuted = !isMuted;
    localStorage.setItem("muted", nextMuted.toString());

    window.dispatchEvent(new Event("mutechange"));
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
