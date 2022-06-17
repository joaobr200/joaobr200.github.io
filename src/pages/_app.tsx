import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

// import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";
import { GlobalStyle } from "../styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={light}>
        <Component {...pageProps}></Component>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
