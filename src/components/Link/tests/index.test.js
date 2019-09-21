import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Link, { RouterLink } from 'components/Link';

describe('Link component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Link to="/#/">test</Link>
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a RouterLink without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <RouterLink to="/#/">test</RouterLink>
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
