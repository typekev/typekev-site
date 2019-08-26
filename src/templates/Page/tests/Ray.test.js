import React from 'react';
import ReactDOM from 'react-dom';
import Ray from 'templates/Page/Ray';

describe('Ray component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Ray />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
