import { createGlobalStyle, ThemeProps } from 'styled-components/macro';

import { Theme } from 'types';
import { gradients } from './gradients';

import { media } from './media';
import { palette } from './palette';
import { theme } from './theme';

export const GlobalStyleProperties = createGlobalStyle`
  :root {
    @property --bg1 {
        syntax: '<color>';
        initial-value: transparent;
        inherits: false;
      }
      @property --bg2 {
        syntax: '<color>';
        initial-value: transparent;
        inherits: false;
      }
      @property --bg3 {
        syntax: '<color>';
        initial-value: transparent;
        inherits: false;
      }
      @property --bg4 {
        syntax: '<color>';
        initial-value: transparent;
        inherits: false;
      }
      @property --fg {
        syntax: '<color>';
        initial-value: transparent;
        inherits: false;
      }
      @property --bg1-trans-duration {
        syntax: '<time>';
        initial-value: 0ms;
        inherits: false;
      }
      @property --bg2-trans-duration {
        syntax: '<time>';
        initial-value: 0ms;
        inherits: false;
      }
      @property --bg3-trans-duration {
        syntax: '<time>';
        initial-value: 0ms;
        inherits: false;
      }
      @property --bg4-trans-duration {
        syntax: '<time>';
        initial-value: 0ms;
        inherits: false;
      }
      @property --fg-trans-duration {
        syntax: '<time>';
        initial-value: 0ms;
        inherits: false;
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
    transition: --bg1 var(--bg1-trans-duration), 
                --bg2 var(--bg2-trans-duration), 
                --bg3 var(--bg3-trans-duration), 
                --bg4 var(--bg4-trans-duration), 
                --fg var(--fg-trans-duration);
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
