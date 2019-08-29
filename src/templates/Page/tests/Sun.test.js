import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Sun from 'templates/Page/Sun';

describe('Sun component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Sun />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
