import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import DevoteamLogo from 'components/DevoteamLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <DevoteamLogo />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
