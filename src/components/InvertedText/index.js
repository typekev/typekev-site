import styled, { css } from 'styled-components';
import theme from 'resources/theme';

const {
  palette: { background, primary },
} = theme;

const InvertedText = styled.span`
  background-color: ${primary.dark};
  color: ${background.default};
  padding: 1rem;
  border-radius: 0.25rem;

  ${({ align }) =>
    align === 'left' &&
    css`
      margin-left: -1rem;
    `}
`;

export default InvertedText;
