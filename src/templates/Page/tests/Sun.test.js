import React from 'react';
import ReactDOM from 'react-dom';
import Sun from 'templates/Page/Sun';

describe('Sun component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sun />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
