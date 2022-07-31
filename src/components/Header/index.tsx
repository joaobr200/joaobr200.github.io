import { useCycle } from "framer-motion";
import { ThemeSwitchContext } from "../../contexts/ThemeSwitchContext";
import Network from "../Network";
import DropdownMenu from "../DropdownMenu";
import Logo from "../Logo";

import * as S from "./styles";
import { List, X } from "phosphor-react";
import ThemeSwitch from "../Ui/ThemeSwitch";

export const menuItems = [
  {
    name: "Sobre mim",
    href: "#about",
  },
  {
    name: "Desenvolvimento",
    href: "#development",
  },
  {
    name: "Projetos Recentes",
    href: "#projects",
  },
];

const Header = () => {
  const [menuIsOpen, cycleMenuIsOpen] = useCycle(false, true);

  return (
    <S.Nav>
      <div className="container">
        <S.NavBar>
          <S.Logo>
            <a
              href="/"
              aria-label="Portifólio do João Justo - Desenvolvedor Front-end"
              tabIndex={1}
            >
              <Logo aria-hidden />
            </a>
          </S.Logo>

          <S.MenuList>
            {menuItems.map((i) => (
              <li key={i.name}>
                <a href={i.href}>{i.name}</a>
              </li>
            ))}
          </S.MenuList>

          <S.NetworkWrapper>
            <Network />
            <S.MenuButton
              type="button"
              title="Abrir menu"
              aria-expanded={menuIsOpen}
              onClick={() => cycleMenuIsOpen()}
            >
              {menuIsOpen ? <X size={32} /> : <List size={32} />}
            </S.MenuButton>
            <ThemeSwitch />
          </S.NetworkWrapper>

          <DropdownMenu open={menuIsOpen} />
        </S.NavBar>
      </div>
    </S.Nav>
  );
};

export default Header;
