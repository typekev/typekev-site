import React from 'react';
import ReactDOM from 'react-dom';
import HeaderText from 'components/Header/HeaderText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderText open toggleDrawer={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
