import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Blog, { compare, sortPosts, getDelay, renderPosts } from 'routes/Blog';
import { Button } from '@material-ui/core';

const posts = [
  { title: 'Title 1', content: 'content', published: 'Date', timestamp: 1 },
  { title: 'Title 1', content: 'content', published: 'Date', timestamp: 2 },
];

const setPostId = jest.fn();
const push = jest.fn();

describe('Blog route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Blog
        history={{ push }}
        match={{ params: { postId: 'post.md.json' } }}
        initialPost={posts[0]}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Blog history={{ push }} match={{ params: { postId: 'post.md.json' } }} initialPost={{}} />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Blog history={{ push }} match={{ params: {} }} initialPost={posts[0]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Blog history={{ push }} match={{ params: {} }} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('compares two posts by timestamp', () => {
    expect(compare(...posts)).toEqual(1);
    expect(compare(...posts.reverse())).toEqual(-1);
  });

  it('sorts a list of posts by timestamp (DESC)', () => {
    expect(sortPosts(posts)).toEqual(posts.reverse());
  });

  it('returns a delay based on the formula (index + 1) * 800', () => {
    expect(getDelay(1)).toEqual(800);
    expect(getDelay(10)).toEqual(8000);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const Posts = renderPosts(posts, setPostId);
    ReactDOM.render(<Posts />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('triggers a onClick event within the return of renderPosts, triggering setPostId', () => {
    const Posts = renderPosts(posts, setPostId);

    const wrapper = shallow(<Posts />);
    const button = wrapper.find(Button).at(1);
    button.props().onClick();
    expect(setPostId.mock.calls.length).toEqual(1);
  });

  it('triggers a onClick event within the return of renderPosts, triggering setPostId', () => {
    const wrapper = shallow(
      <Blog
        history={{ push }}
        match={{ params: { postId: 'post.md.json' } }}
        initialPost={posts[0]}
      />,
    );
    const button = wrapper.find(Button).at(1);
    button.props().onClick();
    expect(push.mock.calls.length).toEqual(1);
    expect(setPostId.mock.calls.length).toEqual(1);
  });
});
