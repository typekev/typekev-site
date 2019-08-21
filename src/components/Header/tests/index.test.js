import React from 'react';
import ReactDOM from 'react-dom';
import Header, { getPath } from 'components/Header';
import { mdiBackburger, mdiMenu } from '@mdi/js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header open toggleDrawer={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should return mdiBackburger', () => {
  const open = true;
  expect(getPath(open)).toBe(mdiBackburger);
});

it('should return mdiMenu', () => {
  const open = false;
  expect(getPath(open)).toBe(mdiMenu);
});
