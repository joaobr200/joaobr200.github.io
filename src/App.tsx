import React from "react";
import Home from "./pages";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { dark, light } from "./styles/themes/index";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
