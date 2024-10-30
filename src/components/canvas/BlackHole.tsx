"use client";
import { useCallback, useEffect, useMemo } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useBloom } from "@/templates/hooks/usePostprocess";

import type { ThreeElements } from "@react-three/fiber";

const scrollMin = -0.25 as const;
const scrollMax = 0.2 as const;

export function BlackHole(props: Omit<ThreeElements["primitive"], "object">) {
  const { scene } = useGLTF("/black-hole.glb");

  const smallScreen = useMemo(() => window.innerWidth < 768, []);
  const scrollHeight = useMemo(() => document.documentElement.scrollHeight * 1.5, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inverseScroll = useCallback((scrollY: number) => Math.max(scrollMax - scrollY / scrollHeight, scrollMin), []);

  const easeInOutQuad = useCallback((t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t), []);
  const ease = (scroll: number) => Math.min(easeInOutQuad(Math.abs(scroll - scene.rotation.x)), 0.1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getRotationX = useCallback((x: number, scroll: number) => x + (x > scroll ? -ease(scroll) : ease(scroll)), []);
  const getPositionY = useCallback(
    (y: number, scroll: number) => y + (y > -scroll - scrollMin ? -ease(scroll) : ease(scroll)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useBloom();

  useEffect(() => {
    const positionX = smallScreen ? 0.3 : 0.5;
    scene.position.setX(positionX);

    const scale = smallScreen ? 0.5 : 0.6;
    scene.scale.set(scale, scale, scale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((_, delta) => {
    scene.rotation.y -= delta * 4;
    const scroll = inverseScroll(window.scrollY);
    if (scene.rotation.x !== scroll) scene.rotation.x = getRotationX(scene.rotation.x, scroll);
    if (scene.position.y !== -scroll - scrollMin) scene.position.y = getPositionY(scene.position.y, scroll);
  });

  return <primitive object={scene} {...props} />;
}
