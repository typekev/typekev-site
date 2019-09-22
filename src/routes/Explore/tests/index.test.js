import React from 'react';
import ReactDOM from 'react-dom';
import Explore from 'routes/Explore';

describe('Explore route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Explore />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
