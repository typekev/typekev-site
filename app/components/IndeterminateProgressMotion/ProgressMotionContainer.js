import styled, { css } from 'styled-components';
import { slowTransition } from 'static/Anim';

const ProgressMotionContainer = styled.div`
  transition: ${slowTransition};
  position: absolute;
  top: 0rem;
  width: 100%;
  z-index: 1101;
  opacity: 0;
  overflow: hidden;
  height: 0rem;
  border-radius: 50%;

  ${props =>
    props.active &&
    css`
      border-radius: 15%;
      opacity: 1;
      height: 0.25rem;
    `};
`;

export default ProgressMotionContainer;
