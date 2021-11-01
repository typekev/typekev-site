import { useLayoutEffect } from 'react';
import { useParams } from 'react-router';

import { RouterPath } from 'types';
import { scrollTo } from 'utils/scrollTo';

import { Robot } from './components/robot/Loadable';
import { NavBar } from './components/navBar/Loadable';

import { About } from './sections/About';
import { Work } from './sections/Work';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';

export function Sections() {
  const { section } = useParams<{ section?: RouterPath }>();

  useLayoutEffect(() => {
    if (section && !window.pageYOffset && !document.documentElement.scrollTop) {
      scrollTo(section);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar />
      <About id={RouterPath.about} />
      <Robot />
      <Work id={RouterPath.work} />
      <Blog id={RouterPath.blog} />
      <Contact id={RouterPath.contact} />
    </>
  );
}
