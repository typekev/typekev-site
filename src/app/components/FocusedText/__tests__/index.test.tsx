import { render } from '@testing-library/react';

import { FocusedText } from '..';

describe('<FocusedText  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FocusedText />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
