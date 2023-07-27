import { useState, useEffect } from 'react';
import { getBlogPosts, getBlogPost } from 'routes/Blog/api';

export const initialState = {};

export const getPosts = async setPosts => setPosts((await getBlogPosts()) || initialState);

export const getSinglePost = setPost => async postId =>
  setPost((postId && (await getBlogPost(postId))) || initialState);

export default function useBlog(initialPost) {
  const [posts, setPosts] = useState(initialState);
  const [post, setPost] = useState(initialPost || initialState);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  const getPost = getSinglePost(setPost);

  return [posts, post, getPost];
}
