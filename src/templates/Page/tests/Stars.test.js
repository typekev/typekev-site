import React from 'react';
import ReactDOM from 'react-dom';
import Stars from 'templates/Page/Stars';

describe('Stars component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stars />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
