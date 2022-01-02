import dynamic from "next/dynamic";
import Head from "next/head";
import type {
  NextPage,
  GetStaticPropsContext,
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsResult,
} from "next/types";
import { ParsedUrlQuery } from "querystring";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getPosts } from "lib/api";
import { getPost } from "lib/api/getPost";
import { Locale, Post } from "types.d";

import type { SSRConfig } from "next-i18next";

const BlogPost = dynamic<Post>(
  import("components/BlogPost").then(({ BlogPost }) => BlogPost)
);

interface Props extends SSRConfig {
  post?: Post;
}

const Post: NextPage<Props> = ({ post }) =>
  post ? (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPost {...post} />
    </>
  ) : null;

export default Post;

interface Params extends ParsedUrlQuery {
  id: string;
}

export async function getStaticPaths({
  locales,
}: GetStaticPathsContext): Promise<GetStaticPathsResult<Params>> {
  const posts = await getPosts();
  const paths: GetStaticPathsResult<Params>["paths"] = [];
  locales?.forEach((locale) =>
    paths.push(
      ...Object.keys(posts).map<typeof paths[number]>((id) => ({
        params: { id },
        locale,
      }))
    )
  );

  return { paths, fallback: false };
}

export async function getStaticProps({
  locale = Locale.en,
  params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
  const post =
    params && (await getPost((await getPosts())[params.id].location.json));

  return {
    props: {
      post,
      ...(await serverSideTranslations(locale)),
    },
  };
}
