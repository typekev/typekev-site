import { createContext } from "react";

import type { PostWithoutContent } from "types.d";

interface Context {
  sortedPosts: PostWithoutContent[];
}

export const PostContext = createContext<Context>({
  sortedPosts: [],
});
