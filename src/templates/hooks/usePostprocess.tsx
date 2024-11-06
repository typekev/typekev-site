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

    const resolution = new THREE.Vector2(size.width * gl.pixelRatio, size.height * gl.pixelRatio);
    const bloom = new UnrealBloomPass(resolution, 200, 1, 0.0075);
    composer.addPass(bloom);

    return composer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl.pixelRatio, size]);

  useFrame((_, delta) => {
    composer.render(delta);
  }, 1);

  return null;
};
