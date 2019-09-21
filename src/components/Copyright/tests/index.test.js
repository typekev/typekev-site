import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Copyright from 'components/Copyright';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Copyright />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
