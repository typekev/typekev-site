import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Stars from 'templates/Page/Stars';

describe('Stars component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Stars />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
