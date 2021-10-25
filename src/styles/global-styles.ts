import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    padding: 5vw 2vw;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  strong {
    font-weight: 400;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
