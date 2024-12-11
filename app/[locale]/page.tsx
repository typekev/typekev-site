import { Chatbot } from "@/components/Chatbot";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Endnote from "@/components/sections/Endnote";
import Work from "@/components/sections/Work";

export default function Page() {
  return (
    <main>
      <About />
      <Work />
      <Contact />
      <Chatbot />
      <Endnote />
    </main>
  );
}
