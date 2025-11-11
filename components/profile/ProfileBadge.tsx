"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { useAudio } from "@/hooks/useAudio";

import { Button } from "../ui/button";
import { Key, keys } from "./MusicPad";
import { profileImagesData as images } from "./profileImagesData";
import { RotatingText } from "./RotatingText";

export function ProfileBadge() {
  const searchParams = useSearchParams();
  const oscillatorParam = searchParams.get("oscillator");
  const { playNote, playChord } = useAudio();
  const [secretState, setSecretState] = useState(oscillatorParam ? 2 : 0);
  const [isHovering, setIsHovering] = useState(false);
  const [imageIndex, setImageIndex] = useState(() => {
    if (typeof window !== "undefined") {
      const savedIndex = localStorage.getItem("profileImageIndex");
      if (savedIndex !== null) {
        const parsedIndex = parseInt(savedIndex, 10);
        if (
          !isNaN(parsedIndex) &&
          parsedIndex >= 0 &&
          parsedIndex < images.length
        ) {
          return parsedIndex;
        }
      }
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("profileImageIndex", imageIndex.toString());
  }, [imageIndex]);

  const handleProfileClick = () => {
    if (secretState === 0 && imageIndex === images.length - 1) {
      setSecretState(1);
    }

    if (secretState > 0) {
      const keyNames = Object.keys(keys) as Key[];
      const keyName = keyNames[imageIndex % keyNames.length];
      const note = keys[keyName];
      if (note) playNote(note, undefined, 1);
    }

    if (secretState === 1 && imageIndex === images.length - 1) {
      setSecretState(2);
      playChord(["C", "E", "G", "B"], undefined, 125, 2);
      const url = new URL(window.location.href);
      url.searchParams.set("oscillator", "square");
      window.history.replaceState({}, "", url);
    }

    setImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <figure className="relative size-56">
      <RotatingText isHovering={isHovering} />
      <Button
        onClick={handleProfileClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="absolute left-1/2 top-1/2 size-40 p-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden border-4 border-foreground/20 rounded-full hover:scale-103 hover:border-foreground/40 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            className={
              index === imageIndex ? "block [&:has(~.block)]:hidden" : "hidden"
            }
            placeholder="blur"
            blurDataURL={image.placeholder}
            alt="Kevin Gonzalez - Engineering Leader and Technology Executive"
            width={152}
            height={152}
            priority={index === imageIndex}
          />
        ))}
      </Button>
    </figure>
  );
}
