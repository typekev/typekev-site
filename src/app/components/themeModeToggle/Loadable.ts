/**
 *
 * Asynchronously loads the component for ThemeModeToggle
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ThemeModeToggle = lazyLoad(
  () => import('../ThemeModeToggle'),
  module => module.ThemeModeToggle,
);
