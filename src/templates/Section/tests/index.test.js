import React from 'react';
import ReactDOM from 'react-dom';
import Section from 'templates/Section';

describe('Section component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Section>Test</Section>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
