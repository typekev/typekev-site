import getPrefersColorScheme from 'utils/getPrefersColorScheme';
import { COLOR_SCHEME_CODE_MAP } from 'resources/constants';

describe('constants', () => {
  it('is DARK when window.matchMedia().matches returns true', () => {
    global.matchMedia = () => ({ matches: true });
    expect(getPrefersColorScheme()).toBe(COLOR_SCHEME_CODE_MAP.DARK);
  });
  it('is LIGHT when window.matchMedia().matches returns false', () => {
    global.matchMedia = () => ({ matches: false });
    expect(getPrefersColorScheme()).toBe(COLOR_SCHEME_CODE_MAP.LIGHT);
  });
});
