import styled, { css } from 'styled-components';

const Content = styled.div`
  display: flex;
  ${({ align }) =>
    align === 'center' &&
    css`
      flex-direction: column;
      flex: 1 1 auto;
      align-self: center;
      margin-top: -25vmin;
    `}
`;

export default Content;
