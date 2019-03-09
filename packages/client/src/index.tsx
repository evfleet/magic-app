import React from "react";
import { render } from "react-dom";

import Root from "./screens/Root";
import { Global, Reset, theme } from "./styles";
import { ThemeProvider } from "./styles/themed-styled";

render(
  <React.Fragment>
    <Reset />
    <Global />
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);
