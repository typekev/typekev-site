/**
 *
 * FocusedText
 *
 */
import {
  memo,
  PropsWithChildren,
  ComponentPropsWithoutRef,
  forwardRef,
} from "react";

import { styled, css, Theme } from "@mui/material/styles";

import { frames, gradients } from "theme";
import { isIECss } from "utils/isIE";

interface Props extends ComponentPropsWithoutRef<"span"> {
  active?: boolean;
}

export const FocusedText = memo(
  forwardRef<HTMLSpanElement, PropsWithChildren<Props>>(
    ({ active, children, ...rest }, ref) => {
      return (
        <Text ref={ref} active={active} {...rest}>
          {children}
        </Text>
      );
    }
  )
);

FocusedText.displayName = FocusedText.name;

const focused = (theme: Theme) => css`
  font-weight: ${theme.typography.fontWeightMedium};
  background: ${gradients.bgFocused};
  background-clip: text;
  text-fill-color: transparent;
  box-decoration-break: clone;
  animation: ${frames.bgPosSway} 7500ms infinite ease;
  background-size: 400% 200%;

  ${isIECss} {
    background: none;
    color: ${theme.palette.secondary.main};
  }
`;

const shouldForwardProp = (prop: PropertyKey) => prop !== "active";
const Text = styled("span", { shouldForwardProp })<Props>`
  border-radius: 1em;
  margin: 0 -0.25em;
  padding: 0 0.25em;

  ${({ theme, active }) =>
    active
      ? focused(theme)
      : css`
          :hover {
            ${focused(theme)}
          }
        `}
`;
