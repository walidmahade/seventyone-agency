import { createGlobalStyle } from "styled-components";
import { THEME } from "./theme";

export const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: ${THEME.fonts.body};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;
