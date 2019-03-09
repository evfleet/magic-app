import React from "react";
import { render } from "react-dom";

import Root from "./screens/Root";
import theme from "./styles/theme";
import { ThemeProvider } from "./styles/themed-styled";

render(
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>,
  document.getElementById("root")
);
