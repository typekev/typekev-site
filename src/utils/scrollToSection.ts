import { Section } from "types.d";

const isToSection = (to: string): to is Section => to in Section;

export const scrollToSection = (to: string) =>
  isToSection(to)
    ? document.getElementById(to)?.scrollIntoView({ behavior: "smooth" })
    : undefined;
