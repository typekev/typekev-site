import styled, { keyframes } from 'styled-components';

import { backgroundLightGradient } from 'static/Colors';
import { medium } from 'static/Dimens';
import { shadow } from 'static/Accents';

const breath = keyframes`
  0% {
     transform:scale(1.1);
     box-shadow:${shadow};
  }
  50% {
    transform:scale(0.6);
    box-shadow: 0 0 0 0 transparent;
    opacity: 0.3;
  }
    100% {
    transform:scale(1.1);
    box-shadow:${shadow};
    opacity: 0.4;
  }

`;

const BreathingCircleAccent = styled.div`
  position: absolute;
  top: 0;
  left: -50vh;
  width: 100vh;
  height: 100vh;
  border-radius: 50%;
  opacity: 0.4;
  background: ${backgroundLightGradient};
  box-shadow: ${shadow};
  transform: scale(1.1);
  animation: ${breath} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 1s;
  z-index: 0;
`;

export default BreathingCircleAccent;
