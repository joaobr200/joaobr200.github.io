import React from "react";
import Image from "next/image";

import Layout from "../components/layout";
import TypeWriter from "../components/typewriter";
import DevelopmentStack from "../components/developmentStack";
import Projects from "../components/projects";
import About from "../components/about";
import Button from "../components/button";

import { Welcome, WelcomeImg, Stack } from "../styles/Pages/Home";

const Home: React.FC = () => {
  return (
    <Layout title="JoaoBR200 | Developer">
      <Welcome className="container">
        <div>
          <h1>
            <TypeWriter text="Seja bem vindo ao meu site" />
          </h1>
          <p>
            Olá me chamo João Vitor, sou desenvolvedor web e de aplicativos
            mobile nativos apaixonado por esse incrível mundo da programação.
          </p>
          <a href="#about">
            <Button size="md" type="button">
              Saiba mais
            </Button>
          </a>
        </div>
        <WelcomeImg
          src="/assets/portfolio.svg"
          alt="Portifolio"
          width={600}
          height={600}
        />
      </Welcome>
      <Stack>
        <div className="container">
          <div className="title">
            <h1>Stack de desenvolvimento</h1>
          </div>
        </div>
        <DevelopmentStack />
      </Stack>
      <Projects />
      <About />
    </Layout>
  );
};

export default Home;
