/**
 *
 * RobotChatBubble
 *
 */
import { memo, useContext } from "react";

import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import { alpha, styled, css } from "@mui/material/styles";
import Keyboard from "react-mk";

import { ThemeModeContext } from "contexts/ThemeModeContext";
import { THEME_MODE_PALETTE_MAP, frames } from "theme";

interface Props {
  message: string;
}

export const RobotChatBubble = memo(({ message }: Props) => {
  const { themeMode } = useContext(ThemeModeContext);

  if (!themeMode) {
    return null;
  }

  const { background, accent, text } = THEME_MODE_PALETTE_MAP[themeMode];
  const backgroundColor = alpha(background, 0.94);
  const borderColor = alpha(accent, 0.94);

  return (
    <Grow
      unmountOnExit
      style={{ transformOrigin: "center right" }}
      in={!!message}
    >
      <BubbleContainer>
        <Bubble
          sx={{
            boxShadow: 1,
            backgroundColor,
            borderColor,
            borderLeftColor: borderColor,
            color: text,
          }}
        >
          <span>
            <Keyboard keyPressDelayRange={[20, 25]}>{message || ""}</Keyboard>
          </span>
        </Bubble>
      </BubbleContainer>
    </Grow>
  );
});

RobotChatBubble.displayName = RobotChatBubble.name;

const BubbleContainer = styled("div")`
  position: relative;
  z-index: 1;
`;

const Bubble = styled(Box)`
  --float-x: 0.25em;
  padding: 0.375em 0.25em;
  border-radius: 1em;
  text-align: center;
  font-size: 0.875em;
  animation: ${frames.float} 4500ms infinite ease;
  border-style: solid;
  min-width: 4em;
  min-height: 37.5px;

  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightMedium};
    transition: ${theme.transitions.create(
      ["color", "background-color", "border-color"],
      { duration: theme.transitions.duration.complex }
    )};

    ${theme.breakpoints.up("sm")} {
      padding: 0.5em;
      font-size: 1.5em;
    }
    ${theme.breakpoints.up("md")} {
      font-size: 2em;
    }
    ${theme.breakpoints.up("lg")} {
      font-size: 2.5em;
    }
  `}

  span:empty:before {
    content: "\xa0";
  }

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 50%;
    transform: translateY(50%);
    right: -1.25em;
    border-width: 0.625em;

    ${({ theme }) => css`
      ${theme.breakpoints.up("md")} {
        right: -1em;
        border-width: 0.5em;
      }
      ${theme.breakpoints.up("lg")} {
        right: -0.75em;
        border-width: 0.375em;
      }
    `}

    border-style: solid;
    border-color: transparent;
    border-left-color: inherit;
    margin-top: -0.5rem;

    filter: drop-shadow(0.0375em 0.05em 0.025em rgba(0, 0, 0, 0.19));
  }
`;
