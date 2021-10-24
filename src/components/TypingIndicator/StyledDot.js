import styled, { keyframes } from 'styled-components';
import Dot from 'components/TypingIndicator/Dot';

const hop = keyframes`
    0% {
        transform:translateY(0rem)
    }
    28% {
        transform:translateY(-0.375rem)
    }
    44% {
        transform:translateY(0rem)
    }
`;

const StyledDot = styled(Dot)`
  animation: ${hop} 1500ms infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 200ms;
  }
  &:nth-child(2) {
    animation-delay: 300ms;
  }
  &:nth-child(3) {
    animation-delay: 400ms;
  }
`;

export default StyledDot;
