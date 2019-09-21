import React from 'react';
import ReactDOM from 'react-dom';
import Discover from 'routes/Discover';

describe('Discover route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Discover />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
