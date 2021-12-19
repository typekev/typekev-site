import { keyframes } from 'styled-components/macro';

export const frames = {
  bgPosSway: keyframes`
    0% {
      background-position: 0% 50%; 
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;  
    }
`,
  axisSway: keyframes`
    0% {
      transform: rotate(0deg);
      left: 0;
    }
    25% {
      transform: rotate(7deg);
      left: var(--sway-x);
    }
    75% {
      transform: rotate(-7deg);
      left: calc(var(--sway-x) * -1);
    }
    100% {
      transform: rotate(0deg);
      left: 0;
    }
`,
  float: keyframes`
    0% {
      transform: translateY(--float-x);
    }
    50% {
      transform: translateY(calc(var(--float-x) * -1));
    }
    100% {
      transform: translateY(--float-x);
    }
`,
};
