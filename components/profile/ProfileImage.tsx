"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Button } from "../ui/button";

const images = [
  { name: "Normal", src: "/images/kevin.jpg" },
  { name: "Sketch", src: "/images/kevin-sketch.png" },
  { name: "Pop Art", src: "/images/kevin-pop-art.png" },
  { name: "Watercolor", src: "/images/kevin-watercolor.png" },
  { name: "Cartoon", src: "/images/kevin-cartoon.png" },
  { name: "Tokyo Pastel", src: "/images/kevin-tokyo-pastel.png" },
  {
    name: "Tokyo Pastel Cartoon",
    src: "/images/kevin-tokyo-pastel-cartoon.png",
  },
];

export function ProfileImage() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const targetVelocityRef = useRef(360 / 25000);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    targetVelocityRef.current = isHovering ? 360 / 4000 : 360 / 25000;

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === undefined) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      const velocityDiff = targetVelocityRef.current - velocityRef.current;
      const smoothingFactor = 0.0013;
      velocityRef.current += velocityDiff * smoothingFactor * deltaTime;

      rotationRef.current += velocityRef.current * deltaTime;
      rotationRef.current %= 360;

      setRotation(rotationRef.current);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovering]);

  const handleProfileClick = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <figure className="relative h-56 w-56 shrink-0 -mb-4 lg:-mb-8">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          willChange: "transform",
        }}
        role="img"
        aria-label="Rotating text Kevin Gonzalez"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            fill="none"
          />
        </defs>
        <text
          className="text-[14.05px] font-mono font-bold uppercase tracking-widest whitespace-pre"
          fill="var(--foreground)"
        >
          <textPath href="#circlePath" startOffset="0%">
            {" "}
            Kevin Gonzalez — Kevin Gonzalez — Kevin Gonzalez —
          </textPath>
        </text>
      </svg>

      <Button
        onClick={handleProfileClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden border-4 border-foreground/20 rounded-full hover:scale-105 hover:border-foreground/40 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Image
          src={images[imageIndex].src}
          alt="Kevin Gonzalez - Engineering Leader and Technology Executive"
          className="object-cover"
          fill
          priority
        />
      </Button>
    </figure>
  );
}
