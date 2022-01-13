/**
 *
 * NavBar
 *
 */
import { memo } from "react";

import { styled, css } from "@mui/material/styles";

export const K = memo(() => <Div>K</Div>);

K.displayName = K.name;

const Div = styled("strong")`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightBold};

    ${theme.breakpoints.between("xs", "md")} {
      height: 27px;
      width: 27px;
      font-size: 27px;
      line-height: 1;
      padding-left: 4px;
    }
    ${theme.breakpoints.up("md")} {
      display: block;
      padding: 0.125em;
      font-size: 2.75em;
    }
    ${theme.breakpoints.up("lg")} {
      display: block;
      font-size: 3em;
    }
  `}
`;
