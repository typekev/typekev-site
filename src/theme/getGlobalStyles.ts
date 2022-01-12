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
    --bg1-trans-duration: 300ms;
    --bg2-trans-duration: 600ms;
    --bg3-trans-duration: 900ms;
    --bg4-trans-duration: 1200ms;
    --fg-trans-duration: 1500ms;

    overflow: hidden auto;
    font-family: "Inter", sans-serif;
    font-weight: 200;
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
    padding: 0 9vw 66vh 9vw;

    ${theme.breakpoints.up("sm")} {
      padding: 0 8vw 60vh 8vw;
    }
    ${theme.breakpoints.up("lg")} {
      padding: 0 6vw 40vh 6vw;
    }
    ${theme.breakpoints.up("xl")} {
      padding: 0 4vw 40vh 4vw;
    }
  }

  #robot_portal {
    pointer-events: none;

    > * {
      pointer-events: all;
    }
  }

  h1 {
    font-weight: 300;
  }

  h2,
  h3 {
    font-weight: 200;
  }

  a:not([type="button"]) {
    color: inherit;
    font-weight: 300;

    :hover {
      color: ${palette.dodgerBlue};
    }
  }

  b {
    font-weight: 400;
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
    --bg1: ${palette.retroOffWhite[400]};
    --bg2: ${palette.retroOffWhite[300]};
    --bg3: ${palette.retroOffWhite[200]};
    --bg4: ${palette.retroOffWhite[100]};
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
