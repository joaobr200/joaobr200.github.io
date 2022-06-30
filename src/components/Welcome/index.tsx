import React from "react";
import Button from "../Button";
import TypeWriter from "../TypeWriter";

import { WelcomeWrapper } from "./styles";
import PortifolioSVG from "../../assets/portfolio.svg";

const Welcome: React.FC = () => {
  return (
    <section>
      <WelcomeWrapper className="container">
        <div>
          <h1>
            Seja bem vindo
            {/* <TypeWriter text="Seja bem vindo ao meu site" /> */}
          </h1>
          <p>
            Me chamo João, sou desenvolvedor front-end jr. apaixonado por esse
            incrível mundo da programação.
          </p>
          <a href="#about">
            <Button size="md" type="button">
              Saiba mais
            </Button>
          </a>
        </div>
        <img src={PortifolioSVG} alt="Portifólo" />
      </WelcomeWrapper>
    </section>
  );
};

export default Welcome;
