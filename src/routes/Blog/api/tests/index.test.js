import { getBlogPosts } from 'routes/Blog/api';

describe('Blog route APIs', () => {
  it('gets a JSON representation of blog posts', () => {
    getBlogPosts().then(res => expect(typeof res).toEqual('object'));

    expect(fetch.mock.calls.length).toEqual(1);
  });
});
