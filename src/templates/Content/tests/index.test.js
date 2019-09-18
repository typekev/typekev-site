import React from 'react';
import ReactDOM from 'react-dom';
import Content from 'templates/Content';

describe('Content component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Content>Test</Content>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with center align without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Content align="center">Test</Content>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
