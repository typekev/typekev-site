import { render } from '@testing-library/react';

import { Contact } from '../Contact';

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

describe('<Contact  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Contact />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
