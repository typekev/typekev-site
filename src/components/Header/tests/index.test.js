import React from 'react';
import ReactDOM from 'react-dom';
import Header, { getPath } from 'components/Header';
import { mdiMenuOpen, mdiMenu } from '@mdi/js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header open toggleDrawer={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should return mdiMenuOpen', () => {
  const open = true;
  expect(getPath(open)).toBe(mdiMenuOpen);
});

it('should return mdiMenu', () => {
  const open = false;
  expect(getPath(open)).toBe(mdiMenu);
});
