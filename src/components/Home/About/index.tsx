import { motion, Variants } from "framer-motion";

import { AboutSection, Container, AboutWrapper } from "./styles";
import me from "../../../assets/me.png";
import { ArrowFatLineRight } from "phosphor-react";

const frameAboutVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const frameMoveArrow: Variants = {
  hover: {
    x: 10,
    transition: {
      type: "spring",
    },
  },
};

const About = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <Container>
          <picture>
            <motion.img
              src={me}
              alt="Minha foto sorrindo com a camisa do flamengo e fundo roxo"
              variants={frameAboutVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            />
          </picture>
          <AboutWrapper>
            <motion.h2
              variants={frameAboutVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-150px",
              }}
              className="underline-gray"
            >
              Quem sou eu ?
            </motion.h2>
            <motion.p
              variants={frameAboutVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-150px",
              }}
            >
              Além da programação, sou técnico de manutenção de aeronaves
              apaixonado pela aviação, com a pandemia da COVID-19 o setor da
              aviação teve um impacto significativo devido às restrições de
              viagem, e então decidi entrar no mundo da programação.
            </motion.p>
            <motion.p
              variants={frameAboutVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-150px",
              }}
            >
              Sou da geração Z e ja vim ao mundo quando celulares e internet já
              faziam parte do cotidiano global. Desde pequeno ja programava
              mesmo sem saber o que era a programação, desenvolvendo scripts e
              plugins para alguns jogos. Estou sempre em busca de conhecimento e
              aprendizado, concluindo cursos especializados na área da
              programação, otendo conhecimento prático de HTML, CSS, Javascript
              e React
            </motion.p>
            <motion.div
              initial="hidden"
              whileHover="hover"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-100px",
              }}
            ></motion.div>
          </AboutWrapper>
        </Container>
      </div>
    </AboutSection>
  );
};

export default About;
