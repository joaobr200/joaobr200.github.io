import React from "react";

import NetWork from "../../components/network";
import { FiHeart } from "react-icons/fi";
import { Footer as Rodape, Wrapper, MadeWithLove } from "./styles";

const Footer: React.FC = () => {
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
        <p>&copy; 2020 joaobr200.github.io</p>
      </div>
    </Rodape>
  );
};

export default Footer;
