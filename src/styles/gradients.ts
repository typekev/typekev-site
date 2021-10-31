import { palette } from './palette';

export const gradients = {
  bgThemeLight: `
    linear-gradient(
      322deg,
      ${palette.retroOffWhite[400]},
      ${palette.retroOffWhite[300]},
      ${palette.retroOffWhite[200]},
      ${palette.retroOffWhite[100]}
    )
  `,
  bgFocused: `
    linear-gradient(
      91.36deg,
      ${palette.pastelOrange[100]} 0%,
      ${palette.pastelPink[100]} 13.02%,
      ${palette.pastelPink[200]} 25.52%,
      ${palette.pastelPurple[100]} 37.5%,
      ${palette.pastelBlue[100]} 49.48%,
      ${palette.pastelPurple[200]} 63.02%,
      ${palette.pastelPink[300]} 72.92%,
      ${palette.pastelRed[100]} 84.38%,
      ${palette.pastelRed[200]} 97.92%
    )
  `,
};
