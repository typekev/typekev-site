import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import noop from 'lodash.noop';
import useBlog, { getPosts, getSinglePost, initialState } from 'hooks/useBlog';

const HookWrapper = ({ hook }) => <div hook={hook(noop)} />;

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

  it('calls getPosts and returns an empty object', () => {
    getPosts(posts => expect(posts).toBe(initialState));
  });

  it('calls getSinglePost and returns an empty object', () => {
    getSinglePost(post => expect(post).toBe(initialState))('post.md.json');
  });
});
