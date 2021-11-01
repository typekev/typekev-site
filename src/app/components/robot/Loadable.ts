/**
 *
 * Asynchronously loads the component for Robot
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Robot = lazyLoad(
  () => import('../Robot'),
  module => module.Robot,
);
