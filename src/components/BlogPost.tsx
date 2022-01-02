/**
 *
 * BlogPost
 *
 */
import dynamic from "next/dynamic";
import Image from "next/image";
import { memo } from "react";

import { SlideProps } from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import ReactMarkdown from "react-markdown";

import { Post } from "types.d";

const RobotPortal = dynamic<Omit<SlideProps, "children">>(
  import("components/robot/RobotPortal").then(({ RobotPortal }) => RobotPortal)
);

export const BlogPost = memo(({ content }: Post) => {
  return (
    <>
      <PostContainer>
        <ReactMarkdown
          components={{
            img: ({ src = "", placeholder: _, ...rest }) => (
              <Image
                src={src}
                alt="blog image"
                width={480}
                height={360}
                {...rest}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </PostContainer>
      <RobotPortal in />
    </>
  );
});

BlogPost.displayName = BlogPost.name;

const PostContainer = styled("article")`
  margin-right: 1em;
  font-size: 2em;

  p {
    display: block;
    overflow: auto;
  }

  img {
    max-width: 100%;
    min-width: 33vw;
  }
`;
