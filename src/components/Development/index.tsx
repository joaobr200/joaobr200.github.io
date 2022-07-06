import {
  DevelopmentSection,
  DevelopmentStackWrapper,
  AboutStack,
} from "./styles";

import ReactSVG from "../../assets/react.svg";
import TypescriptSVG from "../../assets/typescript.svg";
import NodeSVG from "../../assets/nodejs.svg";
import reactLogoGif from "../../assets/react-logo.gif";
import stackLogoGif from "../../assets/stack-logo.gif";
import { motion } from "framer-motion";

const frameSectionDevlopment = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const frameSectionDevlopmentItem = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const frameAboutDevlopment = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const frameAboutDevlopmentItem = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const DevelopmentStack = () => {
  return (
    <DevelopmentSection
      id="development"
      variants={frameSectionDevlopment}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <motion.h2 variants={frameSectionDevlopmentItem} className="underline">
          Stack de Desenvolvimento
        </motion.h2>
        <DevelopmentStackWrapper variants={frameSectionDevlopmentItem}>
          <div>
            <img src={TypescriptSVG} alt="Typescript" />
            <span>Typescript</span>
          </div>
          <div>
            <img src={ReactSVG} alt="React" />
            <span>React</span>
          </div>
          <div>
            <img src={NodeSVG} alt="NodeJS" />
            <span>NodeJS</span>
          </div>
        </DevelopmentStackWrapper>
        <AboutStack
          variants={frameAboutDevlopment}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.article variants={frameAboutDevlopmentItem}>
            <div>
              <img src={stackLogoGif} alt="Stack Logo" />
            </div>
            <div>
              <h2 className="underline-black">Por quê essa stack ?</h2>
              <p>
                Como minha linguagem de desenvolvimento é o javascript, com essa
                stack consigo usa-lá tanto no front-end como no back-end,
                aumentando minha produtividade.
              </p>
            </div>
          </motion.article>
          <motion.article variants={frameAboutDevlopmentItem}>
            <div>
              <img src={reactLogoGif} alt="React Logo" />
            </div>
            <div>
              <h2 className="underline-black">Por quê ReactJS ?</h2>
              <p>
                Simples, pela facilidade e rapidez de poder criar interfaces e
                aplicações web e com o mesmo código criar também aplicações
                mobile nativas para android e IOS.
              </p>
            </div>
          </motion.article>
        </AboutStack>
      </div>
    </DevelopmentSection>
  );
};

export default DevelopmentStack;
