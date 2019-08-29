import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Ray from 'templates/Page/Ray';

describe('Ray component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Ray />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
