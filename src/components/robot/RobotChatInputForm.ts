/**
 *
 * RobotChatInputForm
 *
 */
import { styled, css } from "@mui/material/styles";

export const RobotChatInputForm = styled("form")`
  position: absolute;
  pointer-events: all;
  bottom: -2.5em;
  z-index: 1;

  ${({ theme }) => css`
    ${theme.breakpoints.only("xs")} {
      left: 0;
      margin-left: -51vw;
      width: 74.5vw;
    }
    ${theme.breakpoints.up("sm")} {
      left: -0.5em;
      width: calc(100% + 1em);
      bottom: 0em;
    }
    ${theme.breakpoints.up("md")} {
      left: -1em;
      width: calc(100% + 2em);
      bottom: -0.5em;
    }
    ${theme.breakpoints.up("lg")} {
      left: -2em;
      width: calc(100% + 4em);
    }
  `}
`;
