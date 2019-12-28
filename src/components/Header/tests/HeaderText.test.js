import React from 'react';
import ReactDOM from 'react-dom';
import noop from 'lodash.noop';
import HeaderText from 'components/Header/HeaderText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderText open toggleDrawer={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
