import { createGlobalStyle, ThemeProps } from 'styled-components/macro';

import { Theme } from 'types';
import { gradients } from './gradients';

import { media } from './media';
import { palette } from './palette';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${({ theme: { mode } }: ThemeProps<Theme>) => theme[mode]}

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
    transition: --bg1 150ms, --bg2 300ms, --bg3 450ms, --bg4 600ms, color 450ms;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    padding: 18vw 6vw;

    ${media.small`
      padding: 16vw 6vw;
    `}

    ${media.medium`
      padding: 13vw 5vw;
    `}

    ${media.large`
      padding: 9vw 4vw;
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
    transition: 125ms;
    text-decoration-thickness: 3px;
    color: ${palette.pastelBlue[100]};
    font-weight: 300;

    :hover {
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
