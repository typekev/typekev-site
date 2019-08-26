import React from 'react';
import ReactDOM from 'react-dom';
import Page from 'templates/Page';

describe('Page template', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page>Test</Page>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
