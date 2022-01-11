import { palette } from "./palette";

export const gradients = {
  bg: `
    linear-gradient(
      135deg,
      var(--bg1),
      var(--bg2),
      var(--bg3),
      var(--bg4)
    )
  `,
  bgFocused: `
    linear-gradient(
      135deg,
      ${palette.peachSchnapps} 0%,
      ${palette.cornflowerLilac} 24%,
      ${palette.orchid} 61%,
      ${palette.portage} 80%,
      ${palette.pictonBlue} 100%
    )
  `,
};
