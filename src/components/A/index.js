import styled from 'styled-components';
import theme from 'resources/theme';

const {
  palette: { background, primary },
} = theme;

const A = styled.a`
  background-color: ${primary.dark};
  color: ${background.default};
  text-decoration: none;
  padding: 0.0625rem 0.25rem;
  border-radius: 0.125rem;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${primary.light};
    color: ${primary.dark};
  }
`;

export default A;
