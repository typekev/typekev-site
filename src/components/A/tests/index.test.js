import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import A from 'components/A';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <A />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
