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
      <Button variant="text">
        <Link href={`${Section.blog}/${id}`} passHref shallow>
          <a>{title}</a>
        </Link>
      </Button>
    </LI>
  );
});

PostListItem.displayName = PostListItem.name;

const LI = styled("li")`
  font-size: 0.5em;
  margin-bottom: 0.375em;
  margin-left: 0.125em;

  > a {
    text-decoration-thickness: 0.0625em;
  }

  ${({ theme }) => css`
    > button {
      padding: 0;
      font-weight: ${theme.typography.fontWeightLight};
    }

    ${theme.breakpoints.up("sm")} {
      font-size: 0.5625em;
      margin-left: 0.125em;
    }
    ${theme.breakpoints.up("md")} {
      font-size: 0.625em;
      margin-left: 0.125em;
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
