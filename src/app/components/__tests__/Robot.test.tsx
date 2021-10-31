import { render } from '@testing-library/react';

import { Robot } from '../Robot';

describe('<Robot  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Robot />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
