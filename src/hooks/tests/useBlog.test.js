import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import useBlog, { getPosts, initialState } from 'hooks/useBlog';

const HookWrapper = ({ hook }) => <div hook={hook(() => {})} />;

HookWrapper.propTypes = {
  hook: PropTypes.func.isRequired,
};

const getProps = wrapper => wrapper.find('div').props();

describe('useBlog hook', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns a dictionary of posts', () => {
    const wrapper = shallow(<HookWrapper hook={useBlog} />);

    const {
      hook: [posts],
    } = getProps(wrapper);

    expect(typeof posts).toBe('object');
  });

  it('calls getPosts and returns null', () => {
    getPosts(posts => expect(posts).toBe(initialState));
  });
});
