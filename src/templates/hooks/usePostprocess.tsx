import { useEffect, useMemo } from "react";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, UnrealBloomPass, RenderPass } from "three-stdlib";

export const useBloom = () => {
  const {
    viewport: { dpr },
    size,
    gl,
    scene,
    camera,
  } = useThree();

  const [bloomComposer, bloomPass] = useMemo(() => {
    const bloomComposer = new EffectComposer(gl);

    const renderPass = new RenderPass(scene, camera);
    bloomComposer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(size.width, size.height), 75, 1, 0.001);
    bloomComposer.addPass(bloomPass);

    return [bloomComposer, bloomPass];
  }, [gl, camera, scene, size.height, size.width]);

  useEffect(() => {
    bloomPass.setSize(size.width * dpr, size.height * dpr);
  }, [bloomPass, dpr, size.height, size.width]);

  useFrame((_, delta) => {
    bloomComposer.render(delta);
  }, 1);

  return null;
};
