import { keyframes } from "@mui/material/styles";

export const frames = {
  bgPosSway: keyframes`
    0%, 100% {
      background-position: 0% 50%; 
    }
    50% {
      background-position: 100% 50%;
    }
`,
  sway: keyframes`
    0%, 100% {
      left: 0;
    }
    25% {
      left: var(--sway-x);
    }
    75% {
      left: calc(var(--sway-x) * -1);
    }
`,
  shake: keyframes`
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(var(--shake));
    }
    75% {
      transform: rotate(calc(var(--shake) * -1));
    }
`,
  float: keyframes`
    0%, 100% {
      transform: translateY(--float-x);
    }
    50% {
      transform: translateY(calc(var(--float-x) * -1));
    }
`,
};
