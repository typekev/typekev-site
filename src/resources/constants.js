export const DRAWER_WIDTH = 256;

export const TYPEKEV_SITE_PREFERS_COLOR_SCHEME = 'typekev-site-prefers-color-scheme';

export const COLOR_SCHEME_CODE_MAP = { LIGHT: 'LIGHT', DARK: 'DARK' };

export const PREFERS_COLOR_SCHEME =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches === true
    ? COLOR_SCHEME_CODE_MAP.DARK
    : COLOR_SCHEME_CODE_MAP.LIGHT;

export default {
  DRAWER_WIDTH,
  TYPEKEV_SITE_PREFERS_COLOR_SCHEME,
  COLOR_SCHEME_CODE_MAP,
  PREFERS_COLOR_SCHEME,
};
