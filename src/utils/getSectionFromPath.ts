import { Path, Section } from "types.d";

const PATH_SECTION_MAP: Record<Path, Section> = {
  "/about": Section.about,
  "/work": Section.work,
  "/blog": Section.blog,
  "/contact": Section.contact,
};

const isPathnameValid = (path: string): path is Path =>
  path in PATH_SECTION_MAP;

export const getSectionFromPath = (path: string) =>
  isPathnameValid(path) ? PATH_SECTION_MAP[path] : undefined;
