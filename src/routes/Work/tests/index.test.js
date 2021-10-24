import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Work from 'routes/Work';

describe('Work route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Work />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
