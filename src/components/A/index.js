import styled, { css } from 'styled-components';
import withTheme from '@material-ui/core/styles/withTheme';

const A = styled.a`
  ${({
    theme: {
      palette: { background, primary },
    },
  }) => css`
    background-color: ${primary.dark};
    color: ${background.default};
  `}
  text-decoration: none;
  padding: 0.0625rem 0.25rem;
  border-radius: 0.125rem;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  word-break: break-word;

  &:hover {
    ${({
      theme: {
        palette: { background },
      },
    }) => css`
      background-color: ${background.default};
      color: inherit;
      text-decoration: underline;
    `}
  }
`;

export default withTheme(A);
