import { useLayoutEffect } from 'react';
import { useParams } from 'react-router';

import { RouterPath } from 'types';
import { Robot } from 'app/components/Robot';

import { About } from './sections/About';
import { Work } from './sections/Work';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';

export function Sections() {
  const { section } = useParams<{ section?: RouterPath }>();

  useLayoutEffect(() => {
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  return (
    <>
      <About id="about" />
      <Robot id="robot" />
      <Work id="work" />
      <Blog id="blog" />
      <Contact id="contact" />
    </>
  );
}
