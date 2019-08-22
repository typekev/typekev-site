import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Links from 'components/Drawer/Links';

describe('Links component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Links toggleDrawer={() => {}} />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
