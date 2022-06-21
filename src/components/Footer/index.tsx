import React from "react";

import NetWork from "../Network";
import { FiHeart } from "react-icons/fi";
import { Footer as Rodape, Wrapper, MadeWithLove } from "./styles";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Rodape>
      <Wrapper className="container">
        <MadeWithLove>
          <p>
            Feito com <FiHeart />
          </p>
        </MadeWithLove>
        <NetWork />
      </Wrapper>
      <hr />
      <div className="container">
        <p>&copy; {year} joaobr200.github.io</p>
      </div>
    </Rodape>
  );
};

export default Footer;
