import { useState, useEffect } from 'react';
import { getBlogPosts } from 'routes/Blog/api';

export const initialState = {};

export const getPosts = async setPosts => {
  try {
    const posts = (await getBlogPosts()) || initialState;
    setPosts(posts);
  } catch (err) {
    setPosts(initialState);
  }
};

export default function useBlog() {
  const [posts, setPosts] = useState(initialState);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return [posts];
}
