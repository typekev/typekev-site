import { injectGlobal } from 'styled-components';

import {
  accentColorDarkGradient,
  primaryText,
  accentColor,
} from 'static/Colors';
import { dropShadow } from 'static/Accents';
import { medium } from 'static/Dimens';

/* eslint no-unused-expressions: 0 */
injectGlobal`
    html,
    body {
      position: fixed;
      -webkit-overflow-scrolling: touch;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }

    h1,
    h1 * {
      font-family: 'Montserrat Alternates', sans-serif;
      font-weight: 400;
    }

    h2,
    h2 *,
    h3,
    h3 * {
      font-family: 'Montserrat', sans-serif;
    }

    h2 {
      font-size: 1.125rem;
    }

    h3 {
      font-size: 0.875rem;
    }

    p {
      margin: 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ul {
      list-style: none;
      padding: 0 2rem 0 0;
    }

    li {
      position: relative;
    }

    ul li:before {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.75rem;
      content: '</>';
      font-weight: 900;
      color: #da0443;
      position: absolute;
      right: -2rem;
      top: 0.27rem;
    }

    #app {
      min-height: 100%;
      min-width: 100%;
      font-family: 'Inconsolata', sans-serif;
      font-weight: 400;
      color: ${primaryText};
    }

    .active {
      background: ${accentColorDarkGradient};
    }

    .text-align-right {
      text-align: right;
    }

    .text-align-center {
      text-align: center;
    }

    .indent {
      text-indent: 1rem;
    }

    .font-weight-very-light {
      font-weight: 200;
    }

    .font-weight-light {
      font-weight: 300;
    }

    .font-weight-normal {
      font-weight: 500;
    }

    .font-weight-dark {
      font-weight: 600;
    }

    .grow-flex: {
      flex-grow: 1;
    }

    .display-flex {
      display: flex;
    }

    .flex {
      flex: 1;
    }

    .titleIcon {
      width: 2rem !important;
      height: 2rem !important;
      margin: 0 0.375rem 0.063rem 0.375rem;
      filter: drop-shadow(${dropShadow});
    }

    .Typist {
      min-width: 3rem !important;
      /* display: contents; */
    }

    .Typist .Cursor {
      display: inline-block;
    }

    @media (max-width: ${medium}) {
      .titleIcon {
        width: 4rem !important;
        height: 4rem !important;
        margin-top: -0.75rem;
      }

      .Typist {
        height: 6rem;
      }

      .Cursor {
        width: 0.5rem;
      }

      .Typist .Cursor {
        display: none;
      }
    }
  `;
