import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background: none;
    font-size: 100%;
    color: ${theme.colors.black};
    list-style: none;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4rem;
    transition: all 0.3s;
  }

  body {
    padding: 0;
    margin: 0;
    background: ${theme.colors.background};
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  .Test {
    border: solid 1px red;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primaryDark};
  }

`;

export default GlobalStyle;


