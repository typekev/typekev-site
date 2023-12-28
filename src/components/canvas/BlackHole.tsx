"use client";
import { useEffect } from "react";

import { useGLTF } from "@react-three/drei";
import { PrimitiveProps, useFrame } from "@react-three/fiber";

import { useBloom } from "@/templates/hooks/usePostprocess";

export function BlackHole(props: Omit<PrimitiveProps, "object">) {
  const { scene } = useGLTF("/black-hole.glb");
  useBloom();
  useEffect(() => {
    scene.position.setX(0.75);
    scene.scale.set(0.6, 0.6, 0.6);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useFrame((_, delta) => {
    scene.rotation.y -= delta * 3;
    const invScroll = Math.max(0.17 - window.scrollY / document.documentElement.scrollHeight / 1.5, -0.15);
    const easedTilt = Math.min(easeInOutQuad(Math.abs(invScroll - scene.rotation.x)), 0.1);
    if (scene.rotation.x > invScroll) scene.rotation.x -= easedTilt;
    if (scene.rotation.x < invScroll) scene.rotation.x += easedTilt;
    if (scene.position.y > invScroll * -1) scene.position.y -= easedTilt;
    if (scene.position.y < invScroll * -1) scene.position.y += easedTilt;
  });

  return <primitive object={scene} {...props} />;
}

const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
