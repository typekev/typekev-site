import { createGlobalStyle, ThemeProps } from 'styled-components/macro';

import { Theme } from 'types';
import { gradients } from './gradients';

import { media } from './media';
import { palette } from './palette';
import { theme } from './theme';

export const GlobalStyleProperties = createGlobalStyle`
  @media (prefers-color-scheme: light) {
    :root {
      @property --bg1 {
        syntax: '<color>';
        initial-value: ${palette.retroOffWhite[400]};
        inherits: false;
      }
      @property --bg2 {
        syntax: '<color>';
        initial-value: ${palette.retroOffWhite[300]};
        inherits: false;
      }
      @property --bg3 {
        syntax: '<color>';
        initial-value: ${palette.retroOffWhite[200]};
        inherits: false;
      }
      @property --bg4 {
        syntax: '<color>';
        initial-value: ${palette.retroOffWhite[100]};
        inherits: false;
      }
      @property --fg {
        syntax: '<color>';
        initial-value: ${palette.retroOffBlack[400]};
        inherits: false;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      @property --bg1 {
        syntax: '<color>';
        initial-value: ${palette.retroOffBlack[100]};
        inherits: false;
      }
      @property --bg2 {
        syntax: '<color>';
        initial-value: ${palette.retroOffBlack[200]};
        inherits: false;
      }
      @property --bg3 {
        syntax: '<color>';
        initial-value: ${palette.retroOffBlack[300]};
        inherits: false;
      }
      @property --bg4 {
        syntax: '<color>';
        initial-value: ${palette.retroOffBlack[400]};
        inherits: false;
      }
      @property --fg {
        syntax: '<color>';
        initial-value: ${palette.retroOffWhite[100]};
        inherits: false;
      }
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    overflow: auto;
    font-family: "Inter", sans-serif;
    font-weight: 200;
    line-height: 1.25;
    background: ${gradients.bg};
    background-attachment: fixed;
    color: var(--fg);
    transition: --bg1 300ms, --bg2 600ms, --bg3 900ms, --bg4 1200ms, --fg 1500ms;
    ${({ theme: { mode } }: ThemeProps<Theme>) => theme[mode]}
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    padding: 0 6vw 36vh 6vw;

    ${media.small`
      padding: 0 6vw 33vh 6vw;
    `}

    ${media.medium`
      padding: 0 5vw 32vh 5vw;
    `}

    ${media.large`
      padding: 0 5vw 18vh 5vw;
    `}
  }

  h2 {
    font-weight: 200;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration-thickness: 4px;
    color: inherit;
    font-weight: 300;

    &.active {
      color: ${palette.pastelPurple[200]};
    }

    :hover {
      transition: 300ms;
      color: ${palette.pastelPurple[100]};
    }
  }

  b {
    font-weight: 400;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
