import { createGlobalStyle } from 'styled-components';
import { gradients } from './gradients';
import { media } from './media';
import { palette } from './palette';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: "Inter", sans-serif;
    font-weight: 200;
    line-height: 1.25;
    ${gradients.bgThemeLight}
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    padding: 10vw 7vw 20vw 7vw;

    ${media.large`
      padding: 5vw 2vw 10vw 2vw;
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
