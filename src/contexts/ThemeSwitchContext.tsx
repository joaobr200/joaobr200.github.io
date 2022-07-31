import { createContext, FC, PropsWithChildren, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Themes = "light" | "dark";

interface IThemeSwitchState {
  currentTheme: Themes;
  isDark: boolean;
  toogleTheme(): void;
}

export const ThemeSwitchContext = createContext({} as IThemeSwitchState);

export const ThemeSwitchContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<Themes>("dark");
  const [isDark, setIsDark] = useLocalStorage("theme", true);

  function toogleTheme() {
    setIsDark(!isDark);
    setCurrentTheme(isDark ? "light" : "dark");
  }

  return (
    <ThemeSwitchContext.Provider
      value={{
        currentTheme,
        isDark,
        toogleTheme,
      }}
    >
      {children}
    </ThemeSwitchContext.Provider>
  );
};
