/**
 *
 * RobotHead
 *
 */
import { Icon } from "@mdi/react";
import { styled, css } from "@mui/material/styles";

import { gradients, frames } from "theme";

export const RobotHead = styled(Icon)`
  --sway-x: 0em;
  --shake: 7deg;
  --sway-duration: 2750ms;
  margin-top: -0.25em;

  ${({ theme }) => css`
    ${theme.breakpoints.up("sm")} {
      --sway-x: 1em;
      margin-top: -0.5em;
    }
    ${theme.breakpoints.up("md")} {
      --sway-x: 1.25em;
      margin-top: -0.75em;
    }
  `}

  pointer-events: none;
  position: relative;
  width: inherit;
  background: ${gradients.bgFocused};
  background-size: 550% 150%;
  animation: ${frames.bgPosSway} 7000ms infinite ease,
    ${frames.sway} 2750ms infinite linear,
    ${frames.shake} 2750ms infinite linear;

  ${({ path }) => css`
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='${path}'/></svg>")
      center/contain;
  `}
`;
