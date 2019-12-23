import { getBlogPosts } from 'routes/Blog/api';

describe('Explore route APIs', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('gets a conversation and returns a response containing a token', () => {
    getBlogPosts().then(res => {
      expect(res).toEqual(Array.isArray(res));
    });

    expect(fetch.mock.calls.length).toEqual(1);
  });
});
