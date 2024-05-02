"use client";
import { useCallback, useEffect, useMemo } from "react";

import { useGLTF } from "@react-three/drei";
import { PrimitiveProps, useFrame } from "@react-three/fiber";

import { useBloom } from "@/templates/hooks/usePostprocess";

export function BlackHole(props: Omit<PrimitiveProps, "object">) {
  const { scene } = useGLTF("/black-hole.glb");

  const scrollHeight = useMemo(() => document.documentElement.scrollHeight * 1.5, []);
  const inverseScroll = useCallback((scrollY: number) => Math.max(0.17 - scrollY / scrollHeight, -0.22), []);

  const easeInOutQuad = useCallback((t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t), []);
  const ease = (scroll: number) => Math.min(easeInOutQuad(Math.abs(scroll - scene.rotation.x)), 0.1);

  const getRotationX = useCallback((x: number, scroll: number) => x + (x > scroll ? -ease(scroll) : ease(scroll)), []);
  const getPositionY = useCallback((y: number, scroll: number) => y + (y > -scroll ? -ease(scroll) : ease(scroll)), []);

  useBloom();
  useEffect(() => {
    scene.position.setX(0.5);
    scene.scale.set(0.6, 0.6, 0.6);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useFrame((_, delta) => {
    scene.rotation.y -= delta * 4;
    const scroll = inverseScroll(window.scrollY);
    if (scene.rotation.x !== scroll) scene.rotation.x = getRotationX(scene.rotation.x, scroll);
    if (scene.position.y !== -scroll) scene.position.y = getPositionY(scene.position.y, scroll);
  });

  return <primitive object={scene} {...props} />;
}
