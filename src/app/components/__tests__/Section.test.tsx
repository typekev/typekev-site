import { render } from '@testing-library/react';

import { Section } from '../Section';

describe('<Section  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Section title="Title">Text</Section>);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
