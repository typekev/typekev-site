/**
 *
 * FocusedText
 *
 */
import { ComponentPropsWithoutRef } from 'react';
import { memo, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components/macro';

import { animations } from 'styles/animations';
import { gradients } from 'styles/gradients';

interface Props extends ComponentPropsWithoutRef<'span'> {
  hover?: boolean;
}

export const FocusedText = memo(
  ({ hover, children, ...rest }: PropsWithChildren<Props>) => {
    return (
      <Text hover={hover} {...rest}>
        {children}
      </Text>
    );
  },
);

const Text = styled.span<Props>`
  border-radius: 1em;
  margin: 0 -0.25em;
  padding: 0.125em 0.25em;
  font-weight: 400;

  ${({ hover }) =>
    hover
      ? css`
          font-weight: 300;

          :hover {
            background: ${gradients.bgFocused};
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: ${animations.bgPosSway};
            background-size: 400% 400%;
          }
        `
      : css`
          background: ${gradients.bgFocused};
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: ${animations.bgPosSway};
          background-size: 400% 400%;
        `}
`;
