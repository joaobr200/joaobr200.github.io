import { useContext, useEffect, useRef, useState } from "react";
import { useCycle } from "framer-motion";

import Network from "../Network";
import LogoSVG from "../../assets/logo.svg";

import * as S from "./styles";
import { List, Moon, Sun, X } from "phosphor-react";
import DropdownMenu from "../DropdownMenu";
import { ThemeSwitchContext } from "../../contexts/ThemeSwitchContext";
import { Item } from "framer-motion/types/components/Reorder/Item";
import Logo from "../Logo";

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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { toogleTheme, currentTheme } = useContext(ThemeSwitchContext);

  return (
    <S.Nav>
      <div className="container">
        <S.NavBar>
          <S.Logo>
            <a href="/">
              <Logo />
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
            <div onClick={() => toogleTheme()}>
              {currentTheme ? <Sun size={22} /> : <Moon size={22} />}
            </div>
          </S.NetworkWrapper>

          <DropdownMenu open={menuIsOpen} ref={dropdownRef} />
          <S.MenuButton onClick={() => cycleMenuIsOpen()}>
            {menuIsOpen ? <X size={32} /> : <List size={32} />}
          </S.MenuButton>
        </S.NavBar>
      </div>
    </S.Nav>
  );
};

export default Header;
