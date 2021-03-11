import React from 'react';
import ReactDOM from 'react-dom';
import noop from 'lodash.noop';
import HeaderText, { getTiming } from 'components/Header/HeaderText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderText open toggleDrawer={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('returns a function', () => {
  const doGetTiming = getTiming(true);
  expect(typeof doGetTiming).toBe('function');
});

it('returns a string-number map', () => {
  let timing = getTiming(true)();
  expect(typeof timing.blink).toBe('number');
  expect(typeof timing.names).toBe('number');
  expect(typeof timing.titles).toBe('number');

  timing = getTiming(false)();
  expect(typeof timing.blink).toBe('number');
  expect(typeof timing.names).toBe('number');
  expect(typeof timing.titles).toBe('number');
});
