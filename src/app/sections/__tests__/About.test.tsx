import { render } from '@testing-library/react';

import { About } from '../About';

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

describe('<About  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<About />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
