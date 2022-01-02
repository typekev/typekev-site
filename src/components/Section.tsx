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
    <SectionContainer ref={ref} {...rest}>
      <SectionTitle id={id}>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};

const SectionContainer = styled("section")`
  padding-top: 5em;
  font-size: 1.25em;

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

const SectionTitle = styled("h2")`
  margin-top: 0;
  margin-bottom: 0.25em;
  margin-left: 1px;
  padding-top: 2em;
  font-size: 1.125em;
`;

const SectionContent = styled("div")`
  font-size: 1.875em;
`;
