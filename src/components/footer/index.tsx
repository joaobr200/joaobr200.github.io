import React from "react";

import MadeWithLoveSVG from "../../assets/made-with-love.svg";
import GithubHeadSVG from "../../assets/github-head.svg";
import LinkedinSVG from "../../assets/linkedin-black.svg";
import GithubSVG from "../../assets/github.svg";
import { Container, MadeWithLove, NetWork } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <MadeWithLove>
        <p>
          Feito com <MadeWithLoveSVG /> por{" "}
          <a
            href="https://github.com/joaobr200"
            target="_blank"
            rel="noreferrer"
          >
            JoãoBR200 <GithubHeadSVG />{" "}
          </a>
        </p>
      </MadeWithLove>
      <NetWork>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <LinkedinSVG />
        </a>
        <a href="https://github.com/joaobr200" target="_blank" rel="noreferrer">
          <GithubSVG />
        </a>
      </NetWork>
    </Container>
  );
};

export default Footer;
