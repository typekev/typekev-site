/**
 *
 * Section
 *
 */
import { useRef } from "react";

import { styled, css } from "@mui/material/styles";
import { useInViewport } from "react-in-viewport";

import { SectionProps } from "types.d";

export const Section = ({
  title,
  id,
  onEnterViewport,
  onLeaveViewport,
  rootMargin = "-10% 0px -90% 0px",
  children,
  ...rest
}: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useInViewport(
    ref,
    {
      rootMargin,
    },
    undefined,
    { onEnterViewport, onLeaveViewport }
  );

  return (
    <section ref={ref} id={id} {...rest}>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </section>
  );
};

const SectionTitle = styled("h2")`
  font-size: 1.25em;
  padding-top: 5em;
  margin-top: 0;
  margin-bottom: 0.25em;
  margin-left: 1px;

  ${({ theme }) => css`
    ${theme.breakpoints.up("sm")} {
      padding-top: 5.5em;
      font-size: 1.5em;
    }
    ${theme.breakpoints.up("md")} {
      padding-top: 6em;
      font-size: 2em;
    }
    ${theme.breakpoints.up("lg")} {
      padding-top: 6.5em;
      font-size: 2.5em;
    }
  `}
`;

const SectionContent = styled("div")`
  font-size: 2em;

  ${({ theme }) => css`
    ${theme.breakpoints.up("sm")} {
      font-size: 3em;
    }
    ${theme.breakpoints.up("md")} {
      font-size: 4em;
    }
    ${theme.breakpoints.up("lg")} {
      font-size: 5em;
    }
  `}
`;
