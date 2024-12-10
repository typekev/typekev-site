"use client";
import { useEffect } from "react";

import { Preload, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import { r3f } from "@/helpers/global";

export default function Scene() {
  const { loaded } = useProgress();

  useEffect(() => {
    if (loaded) {
      document.body.style.setProperty("--opening-transition-opacity", "0");
      document.body.style.setProperty("--opening-play-state", "running");
    }
  }, [loaded]);

  return (
    <Canvas
      className="black-hole-canvas"
      style={{ position: "fixed", height: undefined }}
      eventPrefix="client"
      onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}
