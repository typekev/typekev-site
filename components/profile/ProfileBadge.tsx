"use client";

import { useEffect, useEffectEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useOscillator } from "@/hooks/useOscillator";

import { Button } from "../ui/button";
import { Key, keys } from "./MusicPad";
import { ProfileBadgeSkeleton } from "./ProfileBadgeSkeleton";
import { profileImagesData as images } from "./profileImagesData";
import { RotatingText } from "./RotatingText";

const getProfileImageIndex = () => {
  if (typeof window === "undefined") return 0;
  const index = Number(localStorage.getItem("profileImageIndex"));
  return Number.isInteger(index) && index >= 0 && index < images.length ? index : 0;
};

export function ProfileBadge() {
  const router = useRouter();
  const { playNote, playArpeggio, oscillatorParam } = useOscillator();
  const [isHovering, setIsHovering] = useState(false);
  const [secretState, setSecretState] = useState(0);
  const [imageIndex, setImageIndex] = useState<number>();

  const initOscillator = useEffectEvent(() => oscillatorParam && setSecretState(2));
  useEffect(() => {
    initOscillator();
  }, [oscillatorParam]);

  const initProfileImage = useEffectEvent(() => setImageIndex(getProfileImageIndex()));
  useEffect(() => {
    initProfileImage();
  }, []);

  if (imageIndex === undefined) return <ProfileBadgeSkeleton />;

  const handleProfileClick = () => {
    if (secretState === 0 && imageIndex === images.length - 1) setSecretState(1);

    if (secretState > 0) {
      const keyNames = Object.keys(keys) as Key[];
      const keyName = keyNames[imageIndex % keyNames.length];
      const note = keys[keyName];
      if (note) playNote(note, undefined, 1);
    }

    if (secretState === 1 && imageIndex === images.length - 1) {
      setSecretState(2);
      playArpeggio(["C", "E", "G", "B"], undefined, 125, 2);
      const url = new URL(window.location.href);
      url.searchParams.set("oscillator", "square");
      router.replace(url.toString(), { scroll: false });
    }

    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
    localStorage.setItem("profileImageIndex", nextIndex.toString());
  };

  return (
    <figure className="relative size-56">
      <RotatingText isHovering={isHovering} />
      <Button
        onClick={handleProfileClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="absolute top-1/2 left-1/2 size-40 -translate-1/2 overflow-hidden rounded-full border-4 border-foreground/20 p-0 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-103 hover:border-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none dark:shadow-[0_8px_24px_rgba(255,255,255,0.08)]"
      >
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            className={index === imageIndex ? "block [&:has(~.block)]:hidden" : "hidden"}
            placeholder="blur"
            blurDataURL={image.placeholder}
            alt="Kevin Gonzalez - Engineering Leader and Technology Executive"
            width={152}
            height={152}
            preload={index === imageIndex}
            loading="eager"
          />
        ))}
      </Button>
    </figure>
  );
}
