"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface VentureCardProps extends React.ComponentProps<typeof Card> {
  image: string;
  blurImage: string;
}

export function VentureCard({ image, blurImage, children, className, ...props }: VentureCardProps) {
  const [transform, setTransform] = useState(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    );
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  }, []);

  return (
    <Card
      ref={cardRef}
      className={cn(
        "group relative p-0 overflow-hidden border-2 border-foreground/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:border-foreground/40 hover:bg-white/15 dark:bg-white/30 dark:hover:bg-white/50 preserve-3d focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2 focus-within:ring-offset-background",
        className
      )}
      style={{
        transform,
        transition:
          "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
        willChange: isHovering ? "transform" : "auto",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <figure className="relative aspect-3/2 overflow-hidden">
        <Image
          src={image}
          alt={`Venture banner for ${children?.toString()}`}
          className="object-cover transition-all duration-700 group-hover:scale-105 opacity-70 dark:opacity-80 group-hover:opacity-100 group-hover:dark:opacity-100 saturate-200 dark:saturate-150 group-hover:saturate-150 group-hover:dark:saturate-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurImage}
          fill
          preload
        />
        <figcaption className="absolute bottom-0 left-0 right-0 p-4">
          <cite className="inline-block not-italic px-3 py-2 rounded-lg bg-muted/30 backdrop-blur-xl">
            <h3 className="text-lg font-bold tracking-wide uppercase text-shadow-sm text-shadow-muted/10">
              {children}
            </h3>
          </cite>
        </figcaption>
      </figure>
    </Card>
  );
}
