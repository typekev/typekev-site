import React from 'react';
import ReactDOM from 'react-dom';
import Links from 'components/Drawer/Links';

describe('Links component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Links toggleDrawer={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
