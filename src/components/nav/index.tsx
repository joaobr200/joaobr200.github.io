import React from "react";
import Link from "next/link";

import Network from "../../components/network";

import { Header, NavBar, Logo } from "./styles";
import Image from "next/image";

const Nav: React.FC = () => {
  return (
    <Header>
      <div className="container">
        <NavBar>
          <Logo>
            <Link href="/">
              <a>
                <Image src="/assets/logo.svg" width={300} height={300} />
              </a>
            </Link>
          </Logo>

          <Network />
        </NavBar>
      </div>
    </Header>
  );
};

export default Nav;
