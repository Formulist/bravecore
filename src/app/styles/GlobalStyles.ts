import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd {
    margin: 0;
  }

  /* Set up a decent box model on the root element */
  html {
    box-sizing: border-box;
    color: #FFF;

    font-feature-settings: 'dlig' on;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-style: normal;
  }

  /* Remove list styles */
  ul[role='list'], ol[role='list'] {
    list-style: none;
  }

  /* A11y hidden */
  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    color: ${colors.text.primary};
  }
`;
