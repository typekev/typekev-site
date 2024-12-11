"use client";
import { useState } from "react";

import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import { r3f } from "@/helpers/global";

export default function Scene() {
  const [width, setWidth] = useState("1px");

  return (
    <Canvas
      className="black-hole-canvas"
      style={{ position: "fixed", height: undefined, width }}
      eventPrefix="client"
      onCreated={(state) => {
        state.gl.toneMapping = THREE.AgXToneMapping;
        document.body.style.setProperty("--opening-transition-opacity", "0");
        document.body.style.setProperty("--opening-play-state", "running");
        setWidth("100%");
      }}
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}
