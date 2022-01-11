import { Posts, PostsAPI } from "types.d";

import { requestWithCache } from "./cache";

export const getPosts = async () => requestWithCache<Posts>(PostsAPI.baseURL);
