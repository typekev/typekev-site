/**
 *
 * FocusedText
 *
 */
import { ComponentPropsWithoutRef } from 'hoist-non-react-statics/node_modules/@types/react';
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
  ${({ hover }) =>
    hover
      ? css`
          :hover {
            ${gradients.bgFocused}
            ${animations.bgSwayText}
            font-weight: 400;
            letter-spacing: -0.0125em;
          }
        `
      : css`
          ${gradients.bgFocused}
          ${animations.bgSwayText}
          font-weight: 400;
        `}
`;
