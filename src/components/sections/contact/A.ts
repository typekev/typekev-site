import Button from "@mui/material/Button";
import { styled, css } from "@mui/material/styles";

import { frames, gradients, palette } from "theme";

interface Props {
  highlight?: boolean;
}

export const A = styled(Button)<Props>`
  color: ${palette.pictonBlue};
  font-weight: 300;
  text-decoration: underline;
  text-decoration-thickness: 0.0625em;

  :hover {
    text-decoration: underline;
    text-decoration-thickness: 0.0625em;
  }

  & > svg {
    width: 0.625em;
    margin-left: 0.125ch;
  }

  ${({ highlight, theme }) =>
    highlight &&
    css`
      color: ${theme.palette.common.white};
      background: ${gradients.bgFocused};
      animation: ${frames.bgPosSway} 3500ms infinite ease;
      background-size: 700% 200%;
      opacity: 0.8;
      box-shadow: ${theme.shadows[3]};
      transition: opacity 150ms, box-shadow 200ms;

      :hover {
        color: ${theme.palette.common.white};
        opacity: 1;
        box-shadow: ${theme.shadows[5]};
        transition: opacity 150ms, box-shadow 200ms;
      }
    `}
`;
