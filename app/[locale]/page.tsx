import dynamic from "next/dynamic";
import { Suspense } from "react";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Endnote from "@/components/sections/Endnote";
import Work from "@/components/sections/Work";

const View = dynamic(() => import("@/components/canvas/View").then((mod) => mod.View), { ssr: false });
const BlackHole = dynamic(() => import("@/components/canvas/BlackHole").then((mod) => mod.BlackHole), { ssr: false });
const Common = dynamic(() => import("@/components/canvas/View").then((mod) => mod.Common), { ssr: false });
const Chatbot = dynamic(() => import("@/components/Chatbot").then((mod) => mod.Chatbot), { ssr: false });

export default function Page() {
  return (
    <>
      <main>
        <View orbit className="black-hole">
          <Suspense fallback={null}>
            <BlackHole />
            <Common />
          </Suspense>
        </View>
        <About />
        <Work />
        <Contact />
        <Chatbot />
        <Endnote />
      </main>
    </>
  );
}
