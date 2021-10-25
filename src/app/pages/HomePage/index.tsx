import { About } from './About/Loadable';
import { Work } from './Work/Loadable';
import { Blog } from './Blog/Loadable';
import { Contact } from './Contact/Loadable';

export function HomePage() {
  return (
    <>
      <About />
      <Work />
      <Blog />
      <Contact />
    </>
  );
}
