import { render } from '@testing-library/react';

import { ThemeModeToggle } from '../ThemeModeToggle';

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
    const loadingIndicator = render(<ThemeModeToggle />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
