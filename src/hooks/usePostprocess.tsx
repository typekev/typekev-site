"use client";
import { useMemo } from "react";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, UnrealBloomPass, RenderPass } from "three-stdlib";

export const useBloom = () => {
  const { size, gl, scene, camera } = useThree();

  const composer = useMemo(() => {
    const composer = new EffectComposer(gl);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const pixelRatio = gl.getPixelRatio();
    const resolution = new THREE.Vector2(size.width * pixelRatio, size.height * pixelRatio);
    const bloom = new UnrealBloomPass(resolution, 300, 1, 0.008);
    composer.addPass(bloom);

    return composer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  useFrame((_, delta) => {
    composer.render(delta);
  }, 1);

  return null;
};
