import React from "react";

import Network from "../Network";
import { FaSun, FaMoon } from "react-icons/fa";
import LogoSVG from "../../assets/logo.svg";

import {
  Header as Topo,
  NavBar,
  Logo,
  Content,
  StyledSwitch,
  StyledThumb,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Topo>
      <div className="container">
        <NavBar>
          <Logo>
            <a href="/">
              <img src={LogoSVG} alt="Logo" />
            </a>
          </Logo>
          <Content>
            <Network />
          </Content>
        </NavBar>
      </div>
    </Topo>
  );
};

export default Header;
