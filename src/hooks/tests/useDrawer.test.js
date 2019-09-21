import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import useDrawer from 'hooks/useDrawer';

const HookWrapper = ({ hook }) => <div hook={hook()} />;

HookWrapper.propTypes = {
  hook: PropTypes.func.isRequired,
};

const getProps = wrapper => wrapper.find('div').props();

it('should return false by default', () => {
  const wrapper = shallow(<HookWrapper hook={useDrawer} />);

  const {
    hook: [open],
  } = getProps(wrapper);

  expect(open).toBe(false);
});

it('should set open to true', () => {
  const wrapper = shallow(<HookWrapper hook={useDrawer} />);

  const {
    hook: [, toggleDrawer],
  } = getProps(wrapper);

  toggleDrawer();

  const {
    hook: [open],
  } = getProps(wrapper);

  expect(open).toBe(true);
});
