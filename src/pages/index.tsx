import dynamic from "next/dynamic";
import Head from "next/head";
import type { NextPage } from "next/types";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "hooks/useTranslation";

const Sections = dynamic<unknown>(
  import("components/Sections").then(({ Sections }) => Sections)
);

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t("Kevin Gonzalez Software Engineer")}</title>
        <meta
          name="description"
          content={t("The personal website of Kevin Gonzalez")}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sections />
    </div>
  );
};

export default Home;

interface StaticProps {
  locale: string;
}

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
