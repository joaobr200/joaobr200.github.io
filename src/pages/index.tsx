import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeSwitchContext } from "../contexts/ThemeSwitchContext";
import { GlobalStyle } from "../styles/global";
import { dark, light } from "../styles/themes/index";

import Home from "./Home";

const Router = () => {
  const { currentTheme } = useContext(ThemeSwitchContext);
  return (
    <ThemeProvider theme={currentTheme ? dark : light}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Router;
