/**
 *
 * Asynchronously loads the component for NavBar
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NavBar = lazyLoad(
  () => import('../NavBar'),
  module => module.NavBar,
);

export const NavDrawer = lazyLoad(
  () => import('./NavDrawer'),
  module => module.NavDrawer,
);
