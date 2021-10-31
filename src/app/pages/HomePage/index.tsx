import { About } from './About/Loadable';
import { Work } from './Work/Loadable';
import { Blog } from './Blog/Loadable';
import { Contact } from './Contact/Loadable';
import { Robot } from '../../components/Robot';

export function HomePage() {
  return (
    <>
      <About />
      <Robot />
      <Work />
      <Blog />
      <Contact />
    </>
  );
}
