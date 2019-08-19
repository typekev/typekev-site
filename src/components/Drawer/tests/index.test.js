import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from 'components/Drawer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Drawer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a Title component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Drawer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
