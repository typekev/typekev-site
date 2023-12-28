"use client";

import { Preload, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { r3f } from "@/helpers/global";

export default function Scene() {
  const { loaded } = useProgress();

  return (
    <Canvas
      className={loaded ? "black-hole-canvas" : undefined}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
      }}
      eventPrefix="client"
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}