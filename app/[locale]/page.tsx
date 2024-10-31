import { Chatbot } from "@/components/Chatbot";
import { BlackHole } from "@/components/canvas/BlackHole";
import { Common, View } from "@/components/canvas/View";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Endnote from "@/components/sections/Endnote";
import Work from "@/components/sections/Work";

export default function Page() {
  return (
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
  );
}
