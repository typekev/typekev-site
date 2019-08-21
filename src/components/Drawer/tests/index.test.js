import React from 'react';
import ReactDOM from 'react-dom';
import Drawer, { Spacer, Button } from 'components/Drawer';

describe('Drawer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Drawer open toggleDrawer={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Spacer component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spacer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a Button component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>test</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
