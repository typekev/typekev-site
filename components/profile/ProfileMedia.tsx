"use client";

import { useOscillator } from "@/hooks/useOscillator";

import { MusicPad } from "./MusicPad";
import { ProfileBadge } from "./ProfileBadge";

export function ProfileMedia() {
  const { isMuted, oscillatorParam } = useOscillator();

  return (
    <section
      aria-label="About Kevin"
      data-show-pad={Boolean(oscillatorParam) && !isMuted}
      className="profile-media relative grid w-full min-w-0 shrink-0 place-items-center sm:flex sm:flex-col sm:gap-6"
    >
      <ProfileBadge />
      <MusicPad />
    </section>
  );
}
