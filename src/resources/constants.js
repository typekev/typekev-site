export const DRAWER_WIDTH = 256;

export const TYPEKEV_SITE_PREFERS_COLOR_SCHEME = 'typekev-site-prefers-color-scheme';

export const PREFERS_COLOR_SCHEME =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches === true
    ? 'DARK'
    : 'LIGHT';

export default {
  DRAWER_WIDTH,
  TYPEKEV_SITE_PREFERS_COLOR_SCHEME,
  PREFERS_COLOR_SCHEME,
};
