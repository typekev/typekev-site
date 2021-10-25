/**
 *
 * Asynchronously loads the component for Work
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Work = lazyLoad(
  () => import('./index'),
  module => module.Work,
);
