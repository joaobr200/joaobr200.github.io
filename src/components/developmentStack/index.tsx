import React from "react";
import Image from "next/image";

import { Container, About } from "./styles";

const DevelopmentStack: React.FC = () => {
  return (
    <>
      <Container>
        <article>
          <Image
            src="/assests/react.png"
            alt="ReactJS"
            className="react"
            width={"180px"}
            height={"100%"}
          />
          <p>ReactJS</p>
        </article>
      </Container>
      <About className="container">
        <div>
          <h1>Por quê escolhi essa stack ?</h1>
          <p>
            Como minha linguagem de desenvolvimento é o javascript, com essa
            stack consigo usa-lá tanto no front-end como no back-end, aumentando
            minha produtividade.
          </p>
        </div>
        <div>
          <h1>Por quê ReactJS ?</h1>
          <p>
            Simples, pela facilidade e rapidez de poder criar interfaces e
            aplicações web e com o mesmo código criar também aplicações mobile
            nativas para android e IOS.
          </p>
        </div>
      </About>
    </>
  );
};

export default DevelopmentStack;
