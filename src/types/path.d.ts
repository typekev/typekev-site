import type { Section } from "./section";

export type Path =
  | `/${Section.about}/`
  | `/${Section.work}/`
  | `/${Section.blog}/`
  | `/${Section.contact}/`;
