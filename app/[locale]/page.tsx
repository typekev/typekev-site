import dynamic from "next/dynamic";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Endnote from "@/components/sections/Endnote";
import Work from "@/components/sections/Work";
import { Chatbot } from "@/components/Chatbot";

const View = dynamic(() => import("@/components/canvas/View").then((mod) => mod.View), { ssr: false });
const BlackHole = dynamic(() => import("@/components/canvas/BlackHole").then((mod) => mod.BlackHole), { ssr: false });
const Common = dynamic(() => import("@/components/canvas/View").then((mod) => mod.Common), { ssr: false });

export default function Page() {
  return (
    <>
      <aside className="overlay" />
      <main>
        <View orbit className="black-hole">
          <BlackHole />
          <Common />
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
