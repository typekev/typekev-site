/**
 *
 * Asynchronously loads the component for About
 *
 */

import { lazyLoad } from 'utils/loadable';

export const About = lazyLoad(
  () => import('./index'),
  module => module.About,
);
