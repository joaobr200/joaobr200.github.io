import { useState } from "react";
import { motion } from "framer-motion";

import {
  WelcomeSection,
  Container,
  ScrollDownWrapper,
  ImgWrapper,
} from "./styles";
import { ReactComponent as PortifolioSVG } from "../../../assets/portfolio.svg";
import { IoIosArrowDown } from "react-icons/io";

const frameDivWelcome = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const frameDivWelcomeItem = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Welcome = () => {
  const [currentW] = useState<number>(() => window.innerWidth);

  const frameWelcomeImg = {
    hidden: { x: currentW < 1024 ? -20 : 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        bounce: 0.5,
        delay: 1,
      },
    },
  };

  return (
    <WelcomeSection>
      <div className="container">
        <Container>
          <motion.div
            variants={frameDivWelcome}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={frameDivWelcomeItem}>
              Olá, eu sou o João
            </motion.h1>
            <motion.h3 variants={frameDivWelcomeItem}>
              Desenvolvedor Front-end Jr.
            </motion.h3>
            <motion.p variants={frameDivWelcomeItem}>
              Apaixonado pela progamação, através da prática e muito aprendizado
              produzo minhas aplicações.
            </motion.p>
          </motion.div>
          <ImgWrapper
            variants={frameWelcomeImg}
            initial="hidden"
            animate="visible"
          >
            <picture aria-label="Imagem principal do site, homem fazendo sinal de ok com a mão esquerda.">
              <PortifolioSVG aria-hidden />
            </picture>
          </ImgWrapper>
        </Container>
        <motion.div
          variants={frameDivWelcomeItem}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
          }}
        >
          <ScrollDownWrapper>
            <div>
              <IoIosArrowDown aria-hidden size={22} />
              <IoIosArrowDown aria-hidden size={22} />
            </div>
            <span>Role para baixo</span>
          </ScrollDownWrapper>
        </motion.div>
      </div>
    </WelcomeSection>
  );
};

export default Welcome;
