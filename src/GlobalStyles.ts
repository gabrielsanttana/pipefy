import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #ecf1f8;
    color: #333; 
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 14px;
  }

  ul {
    list-style: none;
  }
`;
