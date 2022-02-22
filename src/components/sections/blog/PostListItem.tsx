/**
 *
 * PostListItem
 *
 */
import Link from "next/link";
import { LiHTMLAttributes, memo } from "react";

import Button from "@mui/material/Button";
import { styled, css } from "@mui/material/styles";

import { useRouter } from "hooks/useRouter";
import { Post, Section } from "types.d";
import { getFormattedPostDate } from "utils/getFormattedPostDate";

type Props = Pick<Post, "title" | "timestamp"> &
  LiHTMLAttributes<HTMLLIElement>;

export const PostListItem = memo(({ id, title, timestamp, ...rest }: Props) => {
  const { locale } = useRouter();

  return (
    <LI {...rest}>
      <Timestamp>{getFormattedPostDate(timestamp, locale)}</Timestamp>
      <Link href={`${Section.blog}/${id}`} passHref>
        <Button variant="text">{title}</Button>
      </Link>
    </LI>
  );
});

PostListItem.displayName = PostListItem.name;

const LI = styled("li")`
  font-size: 0.5em;
  margin-bottom: 0.375em;
  margin-left: 0.125em;

  ${({ theme }) => css`
    a {
      padding: 0;
    }

    ${theme.breakpoints.up("sm")} {
      font-size: 0.5625em;
    }
    ${theme.breakpoints.up("md")} {
      font-size: 0.625em;
    }
  `}
`;

const Timestamp = styled("div")`
  font-size: 0.875em;
  margin-bottom: -0.125em;

  ${({ theme }) => css`
    ${theme.breakpoints.up("sm")} {
      font-size: 0.625em;
      margin-bottom: -0.25em;
    }
    ${theme.breakpoints.up("md")} {
      font-size: 0.5em;
      margin-bottom: -0.375em;
    }
  `}
`;
