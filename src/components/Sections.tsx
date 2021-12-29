/**
 *
 * Robot
 *
 */
import dynamic from "next/dynamic";
import { memo, useCallback, useEffect, useState } from "react";

import { debounce } from "@mui/material/utils";

import { useRouter } from "hooks/useRouter";
import { Section, SectionProps } from "types.d";
import { getSectionFromPath } from "utils/getSectionFromPath";
import { scrollToSection } from "utils/scrollToSection";

import type { SlideProps } from "@mui/material/Slide";

const NavBar = dynamic<unknown>(
  import("./NavBar").then(({ NavBar }) => NavBar)
);
const Robot = dynamic<unknown>(import("./Robot").then(({ Robot }) => Robot));
const RobotPortal = dynamic<Omit<SlideProps, "children">>(
  import("./robot/RobotPortal").then(({ RobotPortal }) => RobotPortal)
);
const About = dynamic<SectionProps>(
  import("./sections/About").then(({ About }) => About)
);
const Blog = dynamic<SectionProps>(
  import("./sections/Blog").then(({ Blog }) => Blog)
);
const Contact = dynamic<SectionProps>(
  import("./sections/Contact").then(({ Contact }) => Contact)
);
const Work = dynamic<SectionProps>(
  import("./sections/Work").then(({ Work }) => Work)
);

export const Sections = memo(() => {
  const router = useRouter();
  const [rendering, setRendering] = useState<Section>();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedReplaceRoute = useCallback(debounce(router.replace, 250), []);
  const section = getSectionFromPath(router.asPath);

  useEffect(() => {
    if (section && !window.pageYOffset && !document.documentElement.scrollTop) {
      scrollToSection(section);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEnter = (section: Section) => () => setRendering(section);
  const onExited = () => setRendering(undefined);

  const botPosition = {
    start:
      (!rendering || rendering === Section.about) && section === Section.about,
    middle:
      (!rendering || rendering === Section.work) && section === Section.work,
    end:
      (!rendering ||
        rendering === Section.blog ||
        rendering === Section.contact) &&
      (section === Section.blog || section === Section.contact),
  };

  return (
    <>
      <NavBar />
      <Robot />
      <About
        id={Section.about}
        onEnterViewport={() => debouncedReplaceRoute(Section.about)}
      />
      <RobotPortal
        in={botPosition.start}
        onEnter={onEnter(Section.about)}
        onExited={onExited}
      />
      <Work
        id={Section.work}
        onEnterViewport={() => debouncedReplaceRoute(Section.work)}
      />
      <RobotPortal
        in={botPosition.middle}
        onEnter={onEnter(Section.work)}
        onExited={onExited}
      />
      <Blog
        id={Section.blog}
        onEnterViewport={() => debouncedReplaceRoute(Section.blog)}
      />
      <RobotPortal
        in={botPosition.end}
        onEnter={onEnter(Section.blog)}
        onExited={onExited}
      />
      <Contact
        id={Section.contact}
        onEnterViewport={() => debouncedReplaceRoute(Section.contact)}
        onLeaveViewport={() => debouncedReplaceRoute(Section.blog)}
        rootMargin="-20% 0px -80% 0px"
      />
    </>
  );
});

Sections.displayName = Sections.name;
