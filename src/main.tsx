import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeSwitchContextProvider } from "./contexts/ThemeSwitchContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeSwitchContextProvider>
      <App />
    </ThemeSwitchContextProvider>
  </React.StrictMode>
);
