import {
  Children,
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface IThemeSwitchState {
  currentTheme: boolean;
  toogleTheme(): void;
}

export const ThemeSwitchContext = createContext({} as IThemeSwitchState);

export const ThemeSwitchContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", true);

  function toogleTheme() {
    setCurrentTheme(!currentTheme);
  }

  return (
    <ThemeSwitchContext.Provider
      value={{
        currentTheme,
        toogleTheme,
      }}
    >
      {children}
    </ThemeSwitchContext.Provider>
  );
};
