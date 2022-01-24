import Button from "@mui/material/Button";
import { styled, css } from "@mui/material/styles";

import { frames, gradients } from "theme";
import { isIECss } from "utils/isIE";

const shouldForwardProp = (prop: PropertyKey) => prop !== "highlight";
interface Props {
  highlight?: boolean;
}

export const ContactLink = styled(Button, { shouldForwardProp })<Props>`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
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

  ${({ highlight }) =>
    highlight &&
    css`
      background: ${gradients.bgFocused};
      background-clip: text;
      text-fill-color: transparent;
      box-decoration-break: clone;
      animation: ${frames.bgPosSway} 3500ms infinite ease;
      background-size: 700% 200%;

      ${isIECss} {
        background: none;
      }
    `}
`;
