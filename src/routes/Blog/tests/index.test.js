import React from 'react';
import ReactDOM from 'react-dom';
import Blog, { compare, sortPosts, getDelay, renderPosts } from 'routes/Blog';

const posts = [
  { title: 'Title 1', published: 'Date', timestamp: 1 },
  { title: 'Title 1', published: 'Date', timestamp: 2 },
];

describe('Blog route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Blog match={{ params: { postId: 'post.md.json' } }} />, div);
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
    const setPostId = () => {};
    const Posts = renderPosts(posts, setPostId);
    ReactDOM.render(<Posts />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
