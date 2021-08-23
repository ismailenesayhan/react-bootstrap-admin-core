import { createGlobalStyle } from "styled-components";
// Background Image

export const GlobalStyle = createGlobalStyle`

:root {
    --font-family-primary: "Ubuntu", sans-serif;
    --h-color: rgb(45,55,72);
    --text-color: rgb(26,32,44);
    --grey-color: rgb(74,85,104);
    --grey-background: rgb(226, 232, 240);
}


*, ::after, ::before {
    box-sizing: border-box;
}
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #edf2f6;
}
html {
  overflow-x: hidden;
}
body {
  -webkit-font-smoothing: antialiased;
  font-variant-ligatures: no-common-ligatures;
  font-size: 16px;
  font-family: var(--font-family-primary);
  color: var(--text-color);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-family-primary);
  font-weight: 700;
  margin-bottom: .3rem;
  line-height: 1.2;
  margin-top: 0;
  color: var(--h-color);
}


h1{
  font-size: 1.875rem;
  line-height: 2.25rem;
}

@media only screen and (max-width: 768px) {
  h1{
    font-size: 1.5rem;
    line-height: 2rem;
  }
    h6{
    font-size: .9rem;
    line-height: 1rem;
  }
}

.shadow-sm {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06) !important;
}

.rounded-lg {
    border-radius: .5rem;
}

.stickySide{
  position: sticky;
  top: 0;
  height: 100%;
}

.mobileLogo{
  width: 200px;
}

.mobileNavBar {
  position: fixed;
  padding: 10px;
  width: 100%;
  bottom: 0;
  background-color: white;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 15px -6px;
  overflow-x: auto;
  & .mobileBarScroll{
    display: flex;
    flex-wrap: nowrap;
    gap: 15px;
 
  }
}

.layoutBody{
  margin-top: 2rem;
}

.screenBody{
  margin-top: 1.5rem;
  background-color: white;
  border-radius: .5rem;
  padding: 1.25rem;

}

`;
