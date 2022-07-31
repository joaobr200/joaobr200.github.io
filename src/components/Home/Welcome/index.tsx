import { Suspense, useState } from "react";
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
            <motion.span variants={frameDivWelcomeItem}>
              Desenvolvedor Front-end Jr.
            </motion.span>
            <motion.p variants={frameDivWelcomeItem}>
              Apaixonado pela progamação, através da prática e muito aprendizado
              produzo minhas aplicações.
            </motion.p>
          </motion.div>
          <Suspense>
            <ImgWrapper
              variants={frameWelcomeImg}
              initial="hidden"
              animate="visible"
            >
              <PortifolioSVG />
            </ImgWrapper>
          </Suspense>
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
              <IoIosArrowDown size={22} />
              <IoIosArrowDown size={22} />
            </div>
            <span>Role para baixo</span>
          </ScrollDownWrapper>
        </motion.div>
      </div>
    </WelcomeSection>
  );
};

export default Welcome;
