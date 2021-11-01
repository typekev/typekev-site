import { render } from '@testing-library/react';

import { NavBar } from '../NavBar';

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

describe('<NavBar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<NavBar />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
