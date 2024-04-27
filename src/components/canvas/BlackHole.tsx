"use client";
import { useEffect } from "react";

import { useGLTF } from "@react-three/drei";
import { PrimitiveProps, useFrame } from "@react-three/fiber";

import { useBloom } from "@/templates/hooks/usePostprocess";

export function BlackHole(props: Omit<PrimitiveProps, "object">) {
  const { scene } = useGLTF("/black-hole.glb");

  const isTouchScreen = "ontouchstart" in document.documentElement;
  const scrollHeight = document.documentElement.scrollHeight * 1.5;

  useBloom();
  useEffect(() => {
    scene.position.setX(0.5);
    scene.scale.set(0.6, 0.6, 0.6);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useFrame((_, delta) => {
    scene.rotation.y -= delta * 4;
    const invScroll = Math.max(0.17 - window.scrollY / scrollHeight, -0.22);
    if (scene.rotation.x !== invScroll || scene.position.y !== invScroll * -1) {
      if (isTouchScreen) {
        scene.rotation.x = invScroll;
        scene.position.y = invScroll;
      } else {
        const easedTilt = Math.min(easeInOutQuad(Math.abs(invScroll - scene.rotation.x)), 0.1);
        scene.rotation.x += scene.rotation.x > invScroll ? -easedTilt : easedTilt;
        scene.position.y += scene.position.y > invScroll * -1 ? -easedTilt : easedTilt;
      }
    }
  });

  return <primitive object={scene} {...props} />;
}

const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
