import { useState, useEffect } from 'react';
import { getBlogPosts, getBlogPost } from 'routes/Blog/api';

export const initialState = {};

export const getPosts = async setPosts => {
  try {
    const posts = (await getBlogPosts()) || initialState;
    setPosts(posts);
  } catch (err) {
    setPosts(initialState);
  }
};

export const getSinglePost = setPost => async location => {
  try {
    const post = (location && (await getBlogPost(location))) || initialState;
    setPost(post);
  } catch (err) {
    setPost(initialState);
  }
};

export default function useBlog(initialPost) {
  const [posts, setPosts] = useState(initialState);
  const [post, setPost] = useState(initialPost || initialState);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  const getPost = getSinglePost(setPost);

  return [posts, post, getPost];
}
