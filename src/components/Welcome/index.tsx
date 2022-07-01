import React from "react";
import Button from "../Button";
import TypeWriter from "../TypeWriter";
import { motion } from "framer-motion";

import { WelcomeWrapper } from "./styles";
import PortifolioSVG from "../../assets/portfolio.svg";

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

const frameDivItem = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const frameImg = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Welcome: React.FC = () => {
  return (
    <section>
      <WelcomeWrapper className="container">
        <motion.div
          variants={frameDivWelcome}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={frameDivItem}>
            Seja bem vindo
            {/* <TypeWriter text="Seja bem vindo ao meu site" /> */}
          </motion.h1>
          <motion.p variants={frameDivItem}>
            Me chamo João, sou desenvolvedor front-end jr. apaixonado por esse
            incrível mundo da programação.
          </motion.p>
          <motion.a href="#about" variants={frameDivItem}>
            <Button size="md" type="button">
              Saiba mais
            </Button>
          </motion.a>
        </motion.div>
        <motion.img
          variants={frameImg}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 100,
            bounce: 0.5,
            duration: 1,
            delay: 1,
          }}
          src={PortifolioSVG}
          alt="Portifólo"
        />
      </WelcomeWrapper>
    </section>
  );
};

export default Welcome;
