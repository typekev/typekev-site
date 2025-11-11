"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  isHovering: boolean;
}

const smoothingFactor = 0.001 as const;
const FAST_VELOCITY = 0.075 as const;
const SLOW_VELOCITY = 0.015 as const;
const FPS_120 = 8.33 as const;

export function RotatingText({ isHovering }: Props) {
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);
  const velocityRef = useRef(SLOW_VELOCITY);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const targetVelocity = isHovering ? FAST_VELOCITY : SLOW_VELOCITY;

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;

      const deltaTime = Math.min(currentTime - lastTimeRef.current, FPS_120);

      const velocityDiff = targetVelocity - velocityRef.current;
      velocityRef.current += velocityDiff * smoothingFactor * deltaTime;
      rotationRef.current =
        (rotationRef.current + velocityRef.current * deltaTime) % 360;
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

  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 size-full"
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
        className="text-[14.05px] font-mono font-extrabold uppercase tracking-widest whitespace-pre"
        fill="var(--foreground)"
      >
        <textPath href="#circlePath" startOffset="0%">
          Kevin Gonzalez — Kevin Gonzalez — Kevin Gonzalez —{" "}
        </textPath>
      </text>
    </svg>
  );
}
