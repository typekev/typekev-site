import request, { logError } from 'utils/request';

export const getBlogPosts = () =>
  request('https://typekev.github.io/typekev-blog/posts/json/', {
    method: 'GET',
  }).catch(logError);

export default { getBlogPosts };
