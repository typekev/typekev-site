/**
 *
 * Robot
 *
 */
import dynamic from "next/dynamic";
import { memo, useCallback, useEffect, useRef, useState } from "react";

import { debounce } from "@mui/material/utils";

import { useRouter } from "hooks/useRouter";
import { Section, SectionProps } from "types.d";
import { getSectionFromPath } from "utils/getSectionFromPath";
import { isIE } from "utils/isIE";
import { nullFunction } from "utils/nullFunction";
import { scrollToSection } from "utils/scrollToSection";

import type { SlideProps } from "@mui/material/Slide";

const RobotPortal = isIE
  ? nullFunction
  : dynamic<Omit<SlideProps, "children">>(
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
  const { asPath, replace } = useRouter();
  const [rendering, setRendering] = useState<Section>();
  const section = getSectionFromPath(asPath);
  const sectionRef = useRef<Section>();
  sectionRef.current = section;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedReplace = useCallback(
    debounce((url) => sectionRef.current !== url && replace(url), 300),
    []
  );

  useEffect(() => {
    if (section && !window.pageYOffset && !document.documentElement.scrollTop) {
      scrollToSection(section);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnter = (section: Section) => () => setRendering(section);
  const handleExited = () => setRendering(undefined);

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
      <About
        id={Section.about}
        onEnterViewport={() => debouncedReplace(Section.about)}
      />
      <RobotPortal
        in={botPosition.start}
        onEnter={handleEnter(Section.about)}
        onExited={handleExited}
      />
      <Work
        id={Section.work}
        onEnterViewport={() => debouncedReplace(Section.work)}
      />
      <RobotPortal
        in={botPosition.middle}
        onEnter={handleEnter(Section.work)}
        onExited={handleExited}
      />
      <Blog
        id={Section.blog}
        onEnterViewport={() => debouncedReplace(Section.blog)}
      />
      <RobotPortal
        in={botPosition.end}
        onEnter={handleEnter(Section.blog)}
        onExited={handleExited}
      />
      <Contact
        id={Section.contact}
        onEnterViewport={() => debouncedReplace(Section.contact)}
        onLeaveViewport={() => debouncedReplace(Section.blog)}
        rootMargin="-20% 0px -80% 0px"
      />
    </>
  );
});

Sections.displayName = Sections.name;
