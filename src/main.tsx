import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Globalstyle";

const theme = {
  // optional theme setup
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper />
    </ThemeProvider>
  </React.StrictMode>
);
