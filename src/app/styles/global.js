import { createGlobalStyle } from "styled-components";
import colours from "../styles/colours";

export const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}

body {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 300;
  color: ${colours.navy}
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;
