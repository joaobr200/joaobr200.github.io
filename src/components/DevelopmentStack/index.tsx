import React from "react";

import { Stack, About } from "./styles";
import HtmlSVG from "../../assets/html.svg";
import CssSVG from "../../assets/css.svg";
import ReactSVG from "../../assets/react.svg";
import TypescriptSVG from "../../assets/typescript.svg";
import NodeSVG from "../../assets/nodejs.svg";

const DevelopmentStack: React.FC = () => {
  return (
    <section className="container">
      <h2 className="underline-black">Stack de desenvolvimento</h2>
      <Stack>
        <article>
          <img src={TypescriptSVG} alt="Typescript" />
          <h3>Typescript</h3>
        </article>
        <article>
          <img src={ReactSVG} alt="React" />
          <h3>React</h3>
        </article>
        <article>
          <img src={NodeSVG} alt="NodeJS" />
          <h3>NodeJS</h3>
        </article>
      </Stack>
      <About>
        <div>
          <h2 className="underline-black">Por quê escolhi essa stack ?</h2>
          <p>
            Como minha linguagem de desenvolvimento é o javascript, com essa
            stack consigo usa-lá tanto no front-end como no back-end, aumentando
            minha produtividade.
          </p>
        </div>
        <div>
          <h2 className="underline-black">Por quê ReactJS ?</h2>
          <p>
            Simples, pela facilidade e rapidez de poder criar interfaces e
            aplicações web e com o mesmo código criar também aplicações mobile
            nativas para android e IOS.
          </p>
        </div>
      </About>
    </section>
  );
};

export default DevelopmentStack;
