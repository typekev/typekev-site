import styled, { css } from 'styled-components';
import { withTheme } from '@material-ui/core';

const InvertedText = styled.span`
  ${({
    theme: {
      palette: { background, primary },
    },
  }) => css`
    background-color: ${primary.dark};
    color: ${background.default};
  `}
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  line-height: 2rem;
  display: inline-flex;
  align-items: flex-end;

  ${({ align }) =>
    align === 'left' &&
    css`
      margin-left: -1rem;
    `}
`;

export default withTheme(InvertedText);
