/**
 *
 * Asynchronously loads the component for Blog
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Blog = lazyLoad(
  () => import('./index'),
  module => module.Blog,
);
