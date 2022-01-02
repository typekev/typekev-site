export enum PostsAPI {
  baseURL = "https://typekev.github.io/typekev-blog/posts/json/",
}

interface PostLocation {
  md: string;
  json: string;
}

export interface Post {
  id: string;
  layout: string;
  title: string;
  published: string;
  author: string;
  tags: string;
  timestamp: number;
  location: PostLocation;
  content: string;
}

type PostWithoutContent = Omit<Post, "content">;

export interface Posts {
  [id: string]: PostWithoutContent;
}
