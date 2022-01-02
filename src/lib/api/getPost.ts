import { Post } from "types.d";

import { requestWithCache } from "./cache";

export const getPost = async (url: string) => requestWithCache<Post>(url);
