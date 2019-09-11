import styled, { css } from 'styled-components';
import Container from '@material-ui/core/Container';

const Content = styled(Container)`
  ${({ align }) =>
    align === 'center' &&
    css`
      align-self: center;
      margin-top: calc(-25vmin - 2rem);
    `}
`;

export default Content;
