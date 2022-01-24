/**
 *
 * Blog
 *
 */
import {
  memo,
  ComponentPropsWithoutRef,
  useContext,
  useMemo,
  useState,
} from "react";

import MuiPagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

import { Section } from "components/Section";
import { PostContext } from "contexts/PostContext";
import { useTranslation } from "hooks/useTranslation";

import { PostListItem } from "./blog/PostListItem";

export const Blog = memo((props: ComponentPropsWithoutRef<typeof Section>) => {
  const { t } = useTranslation();
  const { sortedPosts } = useContext(PostContext);
  const [page, setPage] = useState(1);

  const handleChange = (_: unknown, value: number) => {
    setPage(value);
  };

  const allPosts = useMemo(
    () =>
      sortedPosts.map(({ id, title, timestamp }) => (
        <PostListItem key={id} id={id} title={title} timestamp={timestamp} />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const postsOnPage = useMemo(
    () => allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [allPosts, page]
  );

  const count = useMemo(
    () => Math.ceil(allPosts.length / PER_PAGE),
    [allPosts]
  );

  return (
    <Section title={t("Things I've written")} {...props}>
      <ul>{postsOnPage}</ul>
      <Pagination
        hideNextButton
        hidePrevButton
        size="large"
        variant="outlined"
        shape="rounded"
        page={page}
        count={count}
        onChange={handleChange}
      />
    </Section>
  );
});

Blog.displayName = Blog.name;

const PER_PAGE = 3;

const Pagination = styled(MuiPagination)`
  ${({ theme }) => theme.breakpoints.up("md")} {
    line-height: 0;
  }
`;
