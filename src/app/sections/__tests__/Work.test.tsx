import { render } from '@testing-library/react';

import { Work } from '../Work';

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

describe('<Work  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Work />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
