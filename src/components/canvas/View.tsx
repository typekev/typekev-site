"use client";
import {
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  PropsWithChildren,
  Suspense,
  useImperativeHandle,
  useRef,
} from "react";

import { OrbitControls, PerspectiveCamera, View as ViewImpl } from "@react-three/drei";

import { Three } from "@/helpers/components/Three";

import type { OrbitControls as OrbitControlsType } from "three-stdlib";

export const Common = () => (
  <Suspense fallback={null}>
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={10} />
    <PerspectiveCamera makeDefault fov={20} position={[0, 0, 6]} />
  </Suspense>
);

interface Props extends HTMLAttributes<HTMLDivElement> {
  orbit?: boolean;
}

const View = forwardRef(({ children, orbit, ...props }: PropsWithChildren<Props>, ref) => {
  const orbitControlRef = useRef<OrbitControlsType>(null);
  const localRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  useImperativeHandle(ref, () => localRef.current);

  const reset = () => {
    if (orbitControlRef?.current) {
      orbitControlRef.current.object.position.lerp(orbitControlRef.current.position0, 0.02);
    }
  };

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && (
            <OrbitControls
              ref={orbitControlRef}
              enableDamping
              dampingFactor={0.05}
              enablePan={false}
              enableZoom={false}
              onChange={reset}
            />
          )}
        </ViewImpl>
      </Three>
    </>
  );
});

View.displayName = "View";

export { View };
