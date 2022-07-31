import { useContext } from "react";
import { ThemeSwitchContext } from "../../../contexts/ThemeSwitchContext";
import * as S from "./styles";
import { Moon, Sun } from "phosphor-react";

const ThemeSwitch = () => {
  const { currentTheme, toogleTheme } = useContext(ThemeSwitchContext);
  return (
    <S.ThemeSwitchButton
      type="button"
      title="Clique para trocar o tema"
      aria-label={`O Tema atual está ${
        currentTheme === "dark" ? "Escuro" : "Claro"
      }`}
      onClick={() => toogleTheme()}
      style={{ cursor: "pointer" }}
    >
      {currentTheme === "dark" ? (
        <Sun aria-hidden size={22} />
      ) : (
        <Moon aria-hidden size={22} />
      )}
    </S.ThemeSwitchButton>
  );
};

export default ThemeSwitch;
