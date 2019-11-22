import { COLOR_SCHEME_CODE_MAP } from 'resources/constants';

const getPrefersColorScheme = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches === true
    ? COLOR_SCHEME_CODE_MAP.DARK
    : COLOR_SCHEME_CODE_MAP.LIGHT;

export default getPrefersColorScheme;
