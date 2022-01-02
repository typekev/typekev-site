import dynamic from "next/dynamic";
import Head from "next/head";
import type {
  NextPage,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next/types";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { PostContext } from "contexts/PostContext";
import { useTranslation } from "hooks/useTranslation";
import { getPosts } from "lib/api";
import { Locale, PostWithoutContent } from "types.d";

import type { SSRConfig } from "next-i18next";

const Sections = dynamic<unknown>(
  import("components/Sections").then(({ Sections }) => Sections)
);

interface Props extends SSRConfig {
  sortedPosts: PostWithoutContent[];
}

const Home: NextPage<Props> = ({ sortedPosts }) => {
  const { t } = useTranslation();

  return (
    <PostContext.Provider value={{ sortedPosts }}>
      <Head>
        <title>{t("Kevin Gonzalez Software Engineer")}</title>
        <meta
          name="description"
          content={t("The personal website of Kevin Gonzalez")}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sections />
    </PostContext.Provider>
  );
};

export default Home;

export async function getStaticProps({
  locale = Locale.en,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  const sortedPosts = Object.values(await getPosts()).sort(
    (a, b) => b.timestamp - a.timestamp
  );

  return {
    props: {
      sortedPosts,
      ...(await serverSideTranslations(locale)),
    },
  };
}
