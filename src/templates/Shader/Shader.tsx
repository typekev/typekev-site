import { HTMLAttributes, PropsWithChildren, RefObject, forwardRef, useImperativeHandle, useRef } from "react";

import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import fragment from "./glsl/shader.frag";
import vertex from "./glsl/shader.vert";

const ShaderImpl = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.05, 0.0, 0.025),
  },
  vertex,
  fragment,
);

extend({ ShaderImpl });

interface ShaderImplElement extends HTMLAttributes<HTMLDivElement> {
  attach: string;
  time: number;
  glsl: string;
  ref: RefObject<ShaderImplElement>;
}

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      shaderImpl: ShaderImplElement;
    }
  }
}

// eslint-disable-next-line react/display-name
const Shader = forwardRef(({ children, ...props }: PropsWithChildren, ref) => {
  const localRef = useRef<ShaderImplElement>(null) as RefObject<ShaderImplElement>;
  useImperativeHandle(ref, () => localRef.current);
  useFrame((_, delta) => (localRef.current.time += delta));

  return <shaderImpl ref={localRef} glsl={THREE.GLSL3} {...props} attach="material" time={0} />;
});

export default Shader;
