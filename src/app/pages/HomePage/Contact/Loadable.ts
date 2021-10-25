/**
 *
 * Asynchronously loads the component for Contact
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Contact = lazyLoad(
  () => import('./index'),
  module => module.Contact,
);
