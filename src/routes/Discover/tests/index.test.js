import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Discover from 'routes/Discover';

describe('Discover route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Discover />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
