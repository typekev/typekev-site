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

  const [composer, bloomPasses] = useMemo(() => {
    const composer = new EffectComposer(gl);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const resolution = new THREE.Vector2(size.width, size.height);
    const bloomPasses = [
      new UnrealBloomPass(resolution, 100, 1, 0.005),
      new UnrealBloomPass(resolution, 0.05, 1, 0),
    ] as const;

    bloomPasses.forEach((bloomPass) => composer.addPass(bloomPass));
    return [composer, bloomPasses];
  }, [gl, camera, scene, size.height, size.width]);

  useEffect(() => {
    bloomPasses.forEach((bloomPass) => bloomPass.setSize(size.width * dpr, size.height * dpr));
  }, [bloomPasses, dpr, size.height, size.width]);

  useFrame((_, delta) => {
    composer.render(delta);
  }, 1);

  return null;
};
