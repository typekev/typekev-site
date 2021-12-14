import { useLayoutEffect, useMemo } from 'react';
import { useHistory, useParams } from 'react-router';
import {
  createHtmlPortalNode,
  InPortal,
  OutPortal,
} from 'react-reverse-portal';
import { debounce } from '@mui/material';
import Slide from '@mui/material/Slide';

import { RouterPath } from 'types';
import { scrollTo } from 'utils/scrollTo';

import { NavBar } from './components/navBar/Loadable';
import { Robot } from './components/Robot';
import { RobotChatBubble } from './components/robot/RobotChatBubble';

import { About } from './sections/About';
import { Work } from './sections/Work';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';

export function Sections() {
  const history = useHistory();
  const { section } = useParams<{ section?: RouterPath }>();
  const robotChatBubblePortalNode = useMemo(() => createHtmlPortalNode(), []);
  const debouncedReplaceHistory = useMemo(
    () => debounce(history.replace, 200),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useLayoutEffect(() => {
    if (section && !window.pageYOffset && !document.documentElement.scrollTop) {
      scrollTo(section);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const botPosition = {
    start: section === RouterPath.about,
    middle: section === RouterPath.work,
    end: section === RouterPath.blog || section === RouterPath.contact,
  };

  const botDelay = {
    enter: '250ms',
    exit: '0ms',
  };

  return (
    <>
      <NavBar />
      <InPortal node={robotChatBubblePortalNode}>
        <RobotChatBubble message="Click me!" />
      </InPortal>
      <About
        id={RouterPath.about}
        onEnterViewport={() => debouncedReplaceHistory(RouterPath.about)}
      />
      <Slide
        mountOnEnter
        unmountOnExit
        appear={false}
        direction="right"
        in={botPosition.start}
        style={{
          transitionDelay: botPosition.start ? botDelay.enter : botDelay.exit,
        }}
      >
        <Robot>
          <OutPortal node={robotChatBubblePortalNode} />
        </Robot>
      </Slide>
      <Work
        id={RouterPath.work}
        onEnterViewport={() => debouncedReplaceHistory(RouterPath.work)}
      />
      <Slide
        mountOnEnter
        unmountOnExit
        appear={false}
        direction="right"
        in={botPosition.middle}
        style={{
          transitionDelay: botPosition.middle ? botDelay.enter : botDelay.exit,
        }}
      >
        <Robot>
          <OutPortal node={robotChatBubblePortalNode} />
        </Robot>
      </Slide>
      <Blog
        id={RouterPath.blog}
        onEnterViewport={() => debouncedReplaceHistory(RouterPath.blog)}
      />
      <Slide
        mountOnEnter
        unmountOnExit
        appear={false}
        direction="right"
        in={botPosition.end}
        style={{
          transitionDelay: botPosition.end ? botDelay.enter : botDelay.exit,
        }}
      >
        <Robot>
          <OutPortal node={robotChatBubblePortalNode} />
        </Robot>
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
