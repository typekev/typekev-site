"use client";

import { Preload, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { r3f } from "@/helpers/global";

import * as THREE from "three";

export default function Scene() {
  const { loaded } = useProgress();

  return (
    <Canvas
      className={loaded ? "black-hole-canvas" : undefined}
      style={{ position: "fixed", inset: 0 }}
      eventPrefix="client"
      onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}
