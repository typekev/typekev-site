import { css } from "@mui/material/styles";

import { ThemeMode } from "types.d";

import type { SerializedStyles } from "@mui/styled-engine";

import { getMuiTheme } from "./getMuiTheme";
import { gradients } from "./gradients";
import { palette } from "./palette";

export const getGlobalStyles = (theme: ReturnType<typeof getMuiTheme>) => css`
  :root {
    @property --bg1 {
      syntax: "<color>";
      initial-value: transparent;
      inherits: false;
    }
    @property --bg2 {
      syntax: "<color>";
      initial-value: transparent;
      inherits: false;
    }
    @property --bg3 {
      syntax: "<color>";
      initial-value: transparent;
      inherits: false;
    }
    @property --bg4 {
      syntax: "<color>";
      initial-value: transparent;
      inherits: false;
    }
    @property --fg {
      syntax: "<color>";
      initial-value: transparent;
      inherits: false;
    }
    @property --bg1-trans-duration {
      syntax: "<time>";
      initial-value: 0ms;
      inherits: false;
    }
    @property --bg2-trans-duration {
      syntax: "<time>";
      initial-value: 0ms;
      inherits: false;
    }
    @property --bg3-trans-duration {
      syntax: "<time>";
      initial-value: 0ms;
      inherits: false;
    }
    @property --bg4-trans-duration {
      syntax: "<time>";
      initial-value: 0ms;
      inherits: false;
    }
    @property --fg-trans-duration {
      syntax: "<time>";
      initial-value: 0ms;
      inherits: false;
    }
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    ${defaultCssVariables[theme.palette.mode]}
    --bg1-trans-duration: ${theme.transitions.duration.shortest}ms;
    --bg2-trans-duration: ${theme.transitions.duration.shorter}ms;
    --bg3-trans-duration: ${theme.transitions.duration.short}ms;
    --bg4-trans-duration: ${theme.transitions.duration.standard}ms;
    --fg-trans-duration: ${theme.transitions.duration.complex}ms;

    overflow: hidden auto;
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightLight};
    line-height: 1.25;
    background: ${gradients.bg};
    background-attachment: fixed;
    color: var(--fg);
    transition: --bg1 var(--bg1-trans-duration), --bg2 var(--bg2-trans-duration),
      --bg3 var(--bg3-trans-duration), --bg4 var(--bg4-trans-duration),
      --fg var(--fg-trans-duration);

    // Stops drawer from adding padding on xs screens when open
    ${theme.breakpoints.only("xs")} {
      padding-right: 0 !important;
    }
  }

  #__next {
    min-height: 100%;
    min-width: 100%;
    padding-right: 3em;
    padding-bottom: 64vh;
    padding-left: 2em;

    ${theme.breakpoints.up("sm")} {
      padding-right: 3.5em;
      padding-left: 3.5em;
      @media (orientation: landscape) {
        padding-bottom: 15vh;
      }
    }
    ${theme.breakpoints.up("md")} {
      padding-right: 4.5em;
      padding-left: 4.5em;
      @media (orientation: landscape) {
        padding-bottom: 40vh;
      }
    }
    ${theme.breakpoints.up("lg")} {
      padding-right: 5.5em;
      padding-left: 5.5em;
      @media (orientation: landscape) {
        padding-bottom: 36vh;
      }
    }
    ${theme.breakpoints.up("xl")} {
      padding-right: 5.5vw;
      padding-left: 5.5vw;
    }
  }

  #robot_portal {
    pointer-events: none;
    margin-top: 1.5em;
    ${theme.breakpoints.only("sm")} {
      margin-top: 0;
    }
    ${theme.breakpoints.up("md")} {
      margin-top: 2em;
    }

    > * {
      pointer-events: all;
    }
  }

  h1 {
    font-weight: ${theme.typography.fontWeightRegular};
  }

  h2,
  h3 {
    font-weight: ${theme.typography.fontWeightLight};
  }

  a {
    color: inherit;
  }

  b,
  strong {
    font-weight: ${theme.typography.fontWeightMedium};
  }

  strong {
    font-family: ${theme.typography.fontFamilyAlt};
  }

  svg {
    fill: currentColor;
  }

  input,
  select {
    font-family: inherit;
    font-size: inherit;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const defaultCssVariables: Record<ThemeMode, SerializedStyles> = {
  light: css`
    --bg1: ${palette.retroOffWhite[100]};
    --bg2: ${palette.retroOffWhite[200]};
    --bg3: ${palette.retroOffWhite[300]};
    --bg4: ${palette.retroOffWhite[400]};
    --fg: ${palette.retroOffBlack[400]};
  `,
  dark: css`
    --bg1: ${palette.retroOffBlack[100]};
    --bg2: ${palette.retroOffBlack[200]};
    --bg3: ${palette.retroOffBlack[300]};
    --bg4: ${palette.retroOffBlack[400]};
    --fg: ${palette.retroOffWhite[100]};
  `,
};
