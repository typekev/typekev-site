/**
 *
 * RobotHeadContainer
 *
 */
import { styled, css } from "@mui/material/styles";

import { frames } from "theme";

import { SENTIMENT_EMOTE_MAP } from "./emotes";

const shouldForwardProp = (prop: PropertyKey) => prop !== "disableHover";

interface Props {
  disableHover: boolean;
}

export const RobotHeadContainer = styled("div", { shouldForwardProp })<Props>`
  --shake: 5deg;

  position: relative;
  float: right;
  min-width: 5em;
  width: 5em;
  height: 5em;
  animation: ${frames.shake} 500ms infinite linear;
  animation-play-state: paused;

  ${({ theme }) => css`
    ${theme.breakpoints.up("sm")} {
      min-width: 6em;
      width: 9em;
      height: 9em;
    }
    ${theme.breakpoints.up("md")} {
      min-width: 10em;
      width: 12em;
      height: 12em;
    }
    ${theme.breakpoints.up("lg")} {
      min-width: 11em;
      width: 14em;
      height: 14em;
    }
  `}

  ${({ disableHover }) =>
    !disableHover &&
    css`
      &:hover {
        animation-play-state: running;

        & > svg {
          animation-play-state: paused;
          mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='${SENTIMENT_EMOTE_MAP.positive}'/></svg>")
            center/contain;
        }
      }
    `}
`;
