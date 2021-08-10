import { createGlobalStyle } from "styled-components";
// Background Image

export const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
    box-sizing: border-box;
}
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
}
html {
  overflow-x: hidden;
}
body {
  -webkit-font-smoothing: antialiased;
  }
`;
