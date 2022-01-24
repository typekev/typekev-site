/**
 *
 * RobotChatInputForm
 *
 */
import { styled, css } from "@mui/material/styles";

export const RobotChatInputForm = styled("form")`
  position: absolute;
  pointer-events: all;
  bottom: -1.25em;
  z-index: 1;

  ${({ theme }) => css`
    ${theme.breakpoints.only("xs")} {
      right: 0;
      width: 78vw;
    }
    ${theme.breakpoints.up("sm")} {
      bottom: 0.5em;
      left: -3em;
      width: calc(100% + 4em);
    }
    ${theme.breakpoints.up("md")} {
      bottom: 1.25em;
      left: -1em;
      width: calc(100% + 2em);
    }
    ${theme.breakpoints.up("lg")} {
      bottom: 2.5em;
      left: -2em;
      width: calc(100% + 4em);
    }
  `}
`;
