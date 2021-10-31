import { render } from '@testing-library/react';
import { ThemeMode } from 'types';

import { ThemeModeToggle } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<ThemeModeToggle  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <ThemeModeToggle
        themeMode={ThemeMode.light}
        toggleThemeMode={() => {}}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
