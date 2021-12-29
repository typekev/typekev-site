/**
 *
 * RobotChatInput
 *
 */
import { styled } from "@mui/material/styles";

import { RobotChatInput } from "./RobotChatInput";

export const TypeAheadInput = styled(RobotChatInput)`
  position: absolute;
  pointer-events: none;
  height: 100%;

  textarea {
    overflow: hidden;
    height: 100% !important;
  }

  fieldset {
    display: none;
  }

  svg {
    color: transparent;
  }
`;
