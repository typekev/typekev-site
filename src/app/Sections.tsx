import { useCallback, useLayoutEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { debounce } from '@mui/material';
import Slide from '@mui/material/Slide';

import { RouterPath } from 'types';
import { scrollTo } from 'utils/scrollTo';

import { NavBar } from './components/navBar/Loadable';
import { Robot, RobotOutPortal } from './components/Robot';

import { About } from './sections/About';
import { Work } from './sections/Work';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';

export function Sections() {
  const history = useHistory();
  const { section } = useParams<{ section?: RouterPath }>();
  const [rendering, setRendering] = useState<RouterPath>();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedReplaceHistory = useCallback(
    debounce(history.replace, 200),
    [],
  );

  useLayoutEffect(() => {
    if (section && !window.pageYOffset && !document.documentElement.scrollTop) {
      scrollTo(section);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onExited = () => setRendering(undefined);

  const botPosition = {
    start:
      (!rendering || rendering === RouterPath.about) &&
      section === RouterPath.about,
    middle:
      (!rendering || rendering === RouterPath.work) &&
      section === RouterPath.work,
    end:
      (!rendering ||
        rendering === RouterPath.blog ||
        rendering === RouterPath.contact) &&
      (section === RouterPath.blog || section === RouterPath.contact),
  };

  const botDelay = {
    enter: '150ms',
    exit: '0ms',
  };

  return (
    <>
      <NavBar />
      <Robot />
      <About
        id={RouterPath.about}
        onEnterViewport={() => debouncedReplaceHistory(RouterPath.about)}
      />
      <Slide
        mountOnEnter
        unmountOnExit
        direction="right"
        in={botPosition.start}
        onEnter={() => setRendering(RouterPath.about)}
        onExited={onExited}
        style={{
          transitionDelay: botPosition.start ? botDelay.enter : botDelay.exit,
        }}
      >
        <RobotOutPortal />
      </Slide>
      <Work
        id={RouterPath.work}
        onEnterViewport={() => debouncedReplaceHistory(RouterPath.work)}
      />
      <Slide
        mountOnEnter
        unmountOnExit
        direction="right"
        in={botPosition.middle}
        onEnter={() => setRendering(RouterPath.work)}
        onExited={onExited}
        style={{
          transitionDelay: botPosition.middle ? botDelay.enter : botDelay.exit,
        }}
      >
        <RobotOutPortal />
      </Slide>
      <Blog
        id={RouterPath.blog}
        onEnterViewport={() => debouncedReplaceHistory(RouterPath.blog)}
      />
      <Slide
        mountOnEnter
        unmountOnExit
        direction="right"
        in={botPosition.end}
        onEnter={() => setRendering(RouterPath.blog)}
        onExited={onExited}
        style={{
          transitionDelay: botPosition.end ? botDelay.enter : botDelay.exit,
        }}
      >
        <RobotOutPortal />
      </Slide>
      <Contact
        id={RouterPath.contact}
        onEnterViewport={() => debouncedReplaceHistory(RouterPath.contact)}
        onLeaveViewport={() => debouncedReplaceHistory(RouterPath.blog)}
        rootMargin="-20% 0px -80% 0px"
      />
    </>
  );
}
