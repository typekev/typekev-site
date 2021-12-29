/**
 *
 * FocusedText
 *
 */
import { memo, PropsWithChildren, ComponentPropsWithoutRef } from "react";

import { styled, css } from "@mui/material/styles";

import { frames, gradients } from "theme";

interface Props extends ComponentPropsWithoutRef<"span"> {
  active?: boolean;
}

export const FocusedText = memo(
  ({ active, children, ...rest }: PropsWithChildren<Props>) => {
    return (
      <Text active={active} {...rest}>
        {children}
      </Text>
    );
  }
);

FocusedText.displayName = FocusedText.name;

const focused = css`
  background: ${gradients.bgFocused};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${frames.bgPosSway} 7500ms infinite ease;
  background-size: 400% 200%;
`;

const shouldForwardProp = (prop: PropertyKey) => prop !== "active";
const Text = styled("span", { shouldForwardProp })<Props>`
  border-radius: 1em;
  margin: 0 -0.25em;
  padding: 0.125em 0.25em;
  font-weight: 400;

  ${({ active }) => active && focused}

  :hover {
    ${focused}
  }
`;
