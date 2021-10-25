import { render } from '@testing-library/react';

import { Blog } from '..';

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

describe('<Blog  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Blog />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
