import React from "react";
import Image from "next/image";

import Certificates from "../certificates";

import { Container, Content } from "./styles";

const About: React.FC = () => {
  return (
    <Container id="about">
      <div className="container">
        <Image src={"/assets/me.jpg"} alt="me" width={300} height={"100%"} />
        <Content>
          <div>
            <h1>Quem sou eu ?</h1>
            <article>
              <p>
                Além da programação, sou mecânico de aeronaves apaixonado pela
                aviação, com a pandemia da COVID-19 o setor da aviação teve um
                impacto significativo devido às restrições de viagem, bem como a
                queda na demanda entre os viajantes.
              </p>
              <p>
                Sou da geração Z e ja vim ao mundo quando celulares e internet
                já faziam parte do cotidiano global. Desde pequeno ja programava
                mesmo sem saber o que era a programação, desenvolvendo scripts e
                plugins para alguns jogos. Com tempo livre em meia a pandemia
                aproveito para desenvolver minhas habilidades na programação, em
                especial na linguagem javascript.
              </p>
            </article>
          </div>
        </Content>
      </div>

      <Certificates />
    </Container>
  );
};

export default About;
