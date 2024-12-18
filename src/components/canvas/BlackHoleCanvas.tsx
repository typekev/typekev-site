"use client";
import { RefObject, useRef, useState } from "react";

import { OrbitControls, PerspectiveCamera, Preload, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import type { OrbitControls as OrbitControlsType } from "three-stdlib";

import { BlackHole } from "./BlackHole";

interface Props {
  ref: RefObject<HTMLDivElement>;
}

export function BlackHoleCanvas({ ref }: Props) {
  const [width, setWidth] = useState("1px");
  const orbitControlRef = useRef<OrbitControlsType>(null);

  const reset = () => {
    if (orbitControlRef?.current) {
      orbitControlRef.current.object.position.lerp(orbitControlRef.current.position0, 0.02);
    }
  };

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
      <View track={ref}>
        <BlackHole />
        <ambientLight intensity={0.51} />
        <pointLight position={[20, 30, 10]} intensity={10} />
        <PerspectiveCamera makeDefault fov={20} position={[0, 0, 6]} />
        <OrbitControls
          ref={orbitControlRef}
          enableDamping
          dampingFactor={0.005}
          enablePan={false}
          enableZoom={false}
          onChange={reset}
        />
      </View>
      <Preload all />
    </Canvas>
  );
}
