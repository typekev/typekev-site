import styled, { keyframes } from 'styled-components';

import { backgroundContrastLightGradient } from 'static/Colors';
import { medium } from 'static/Dimens';
import { shadow } from 'static/Accents';

const breath = keyframes`
  0% {
     transform:scale(.9);
     box-shadow:${shadow};
  }
  50% {
    transform:scale(1);
    box-shadow: 0 0 0 0 transparent;
    opacity: 0.6
  }
    100% {
    transform:scale(.9);
    box-shadow:${shadow};
    opacity: 0.3
  }

`;

const BreathingCircle = styled.div`
  position: absolute;
  top: 0;
  left: -50vh;
  width: 100vh;
  height: 100vh;
  border-radius: 50%;
  opacity: 0.3;
  background: ${backgroundContrastLightGradient};
  box-shadow:${shadow};
  animation: ${breath} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  z-index: 0;
`;

export default BreathingCircle;
