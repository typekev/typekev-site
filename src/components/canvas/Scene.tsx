"use client";

import { Preload, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { r3f } from "@/helpers/global";

import * as THREE from "three";
import { useEffect } from "react";

export default function Scene() {
  const { loaded } = useProgress();

  useEffect(() => {
    document.body.style.setProperty("--name-transition-opacity", "0");
    document.body.style.setProperty("--name-play-state", "running");
  }, [loaded]);

  return (
    <Canvas
      className={loaded ? "black-hole-canvas" : undefined}
      style={{ position: "fixed", height: undefined }}
      eventPrefix="client"
      onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}
