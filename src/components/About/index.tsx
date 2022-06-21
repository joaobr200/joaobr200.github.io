import React from "react";

import { AboutSection, Container, AboutWrapper } from "./styles";
import me from "../../assets/me.png";

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container className="container">
        <img src={me} alt="me" />
        <AboutWrapper>
          <article>
            <h2 className="underline-gray">Quem sou eu ?</h2>
            <p>
              Além da programação, sou técnico de manutenção de aeronaves
              apaixonado pela aviação, com a pandemia da COVID-19 o setor da
              aviação teve um impacto significativo devido às restrições de
              viagem, bem como a queda na demanda entre os viajantes.
            </p>
            <p>
              Sou da geração Z e ja vim ao mundo quando celulares e internet já
              faziam parte do cotidiano global. Desde pequeno ja programava
              mesmo sem saber o que era a programação, desenvolvendo scripts e
              plugins para alguns jogos. Estou sempre em busca de conhecimento e
              aprendizado, conclui cursos especializados na área da programação
              tendo conhecimento prático de HTML, CSS, Javascript e React
            </p>
          </article>
        </AboutWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
