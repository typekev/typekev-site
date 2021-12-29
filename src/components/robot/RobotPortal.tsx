/**
 *
 * RobotPortal
 *
 */
import dynamic from "next/dynamic";
import { ComponentPropsWithoutRef, memo } from "react";

import MuiSlide, { SlideProps } from "@mui/material/Slide";
import { styled, css } from "@mui/material/styles";

import { frames } from "theme";

import type { Robot } from "../Robot";

const RobotOutPortal = dynamic<unknown>(
  () => import("./RobotOutPortal").then(({ RobotOutPortal }) => RobotOutPortal),
  { ssr: false }
);

type Props = ComponentPropsWithoutRef<typeof Robot> &
  Omit<SlideProps, "children">;

export const RobotPortal = memo((props: Props) => {
  return (
    <Slide mountOnEnter unmountOnExit direction="right" {...props}>
      <OutPortalContainer>
        <RobotOutPortal />
      </OutPortalContainer>
    </Slide>
  );
});

RobotPortal.displayName = RobotPortal.name;

const Slide = styled(MuiSlide)`
  transition-delay: ${(props) => props.in && 150};
`;

const OutPortalContainer = styled("div")`
  position: relative;

  > * {
    --float-x: 0em;
    ${({ theme }) => css`
      ${theme.breakpoints.up("sm")} {
        --float-x: 0.125em;
      }
      ${theme.breakpoints.up("md")} {
        --float-x: 0.5em;
      }
    `}

    position: absolute;
    display: flex;
    float: right;
    align-items: center;
    right: 1.25em;
    gap: 0.5em;
    animation: ${frames.float} 4500ms infinite ease;

    ${({ theme }) => css`
      ${theme.breakpoints.up("sm")} {
        right: 2em;
        gap: 1em;
      }
      ${theme.breakpoints.up("md")} {
        right: 3em;
        gap: 1.5em;
      }
      ${theme.breakpoints.up("lg")} {
        right: 7em;
        gap: 2em;
      }
    `}
  }
`;
