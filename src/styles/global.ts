import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme["black-500"]};
    color: ${(props) => props.theme["gray-100"]};
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }
`;
