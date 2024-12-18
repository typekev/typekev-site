"use client";
import dynamic from "next/dynamic";
import { RefObject, useEffect, useRef, useState } from "react";

const BlackHoleCanvas = dynamic(() => import("./BlackHoleCanvas").then((mod) => mod.BlackHoleCanvas), { ssr: false });

export function BlackHoleScene() {
  const [init, setInit] = useState(false);
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

  useEffect(() => {
    setTimeout(() => setInit(true), 2500);
  }, []);

  return (
    <>
      {init && <BlackHoleCanvas ref={ref} />}
      <div ref={ref} className="black-hole" />
    </>
  );
}
