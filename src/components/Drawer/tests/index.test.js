import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Drawer, { Spacer, Button } from 'components/Drawer';

describe('Drawer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Drawer open toggleDrawer={() => {}} />
      </Router>,
      div,
    );
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
