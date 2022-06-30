import React, { useContext } from "react";
import Home from "./pages";
import { ThemeProvider } from "styled-components";
import {
  ThemeSwitchContext,
  ThemeSwitchContextProvider,
} from "./contexts/ThemeSwitchContext";
import { GlobalStyle } from "./styles/global";
import { dark, light } from "./styles/themes/index";

const App: React.FC = () => {
  const { currentTheme } = useContext(ThemeSwitchContext);

  return (
    <ThemeProvider theme={currentTheme ? dark : light}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
