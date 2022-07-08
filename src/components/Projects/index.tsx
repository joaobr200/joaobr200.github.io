import { Suspense } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "styled-components";
import {
  ProjectsSection,
  Container,
  ProjectWrapper,
  ProjectContent,
} from "./styles";

import "swiper/css/autoplay";
import "swiper/css/pagination";

const frameSectionAbout = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const frameSectionAboutItem = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const projects = [
  {
    name: "Calculadora",
    description: "Uma simples calculadora feita com html, css e javascript.",
    img: "projects/calculadora.png",
    url: "https://github.com/joaojustodev/Calculadora",
  },
  {
    name: "App bíblia",
    description:
      "Aplicativo da biblia integrado com uma API para buscar livros e versiculos em versões especificas.",
    img: "projects/appbiblia.png",
    url: "https://github.com/joaojustodev/AppBiblia",
  },
  {
    name: "Github Search",
    description:
      "Integrado com API do github consigo buscar por usuarios e organizaçoes dentro do github",
    img: "projects/githubsearch.png",
    url: "https://github.com/joaojustodev/github-search",
  },
  {
    name: "Foodima",
    description: "Foodima é um site fictício de receitas culinárias.",
    img: "projects/foodima.png",
    url: "https://github.com/joaojustodev/Foodima",
  },
  {
    name: "Weather Now",
    description: "Aplicativo para buscar o clima de sua cidade.",
    img: "projects/weathernow.png",
    url: "https://github.com/joaojustodev/WeatherNow",
  },
  {
    name: "Desafio Rocket Coffee",
    description: "Desafio Rocketseat - Landing page rocket coffee",
    img: "projects/rocketcoffe.png",
    url: "https://github.com/joaojustodev/desafio-rocket-coffee",
  },
  {
    name: "Ignite Lab - Rocketseat",
    description:
      "Desafio Rocketseat - Criação de um plataforma de aulas online",
    img: "projects/ignitelab.png",
    url: "https://github.com/joaojustodev/ignite-lab-joaobr200-challenger",
  },
  {
    name: "Ignite Lab Next - Rocketseat",
    description:
      "Desafio Rocketseat - Criação de um plataforma de aulas online com NextJS e Autenticação pelo github.",
    img: "projects/ignitelabnext.png",
    url: "https://github.com/joaojustodev/ignite-lab-joaobr200-next",
  },
];

const Projects = () => {
  const { name } = useTheme();
  return (
    <ProjectsSection
      id="projects"
      variants={frameSectionAbout}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container className="container">
        <motion.h1 variants={frameSectionAboutItem} className="underline">
          Projetos
        </motion.h1>
        <motion.div variants={frameSectionAboutItem}>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={50}
            grabCursor={true}
            autoplay={{ delay: 5000 }}
            loop={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            style={{
              padding: "1rem 0",
            }}
          >
            {projects.map(({ name, description, url, img }, index) => (
              <SwiperSlide key={index}>
                <ProjectWrapper currentTheme={name}>
                  <Suspense>
                    {img ? (
                      <img src={img} alt={name} />
                    ) : (
                      <div className="not-image">
                        <span>{name}</span>
                      </div>
                    )}
                  </Suspense>
                  <ProjectContent>
                    <div>
                      <strong>{name}</strong>
                      <p>{description}</p>
                    </div>
                    <div>
                      <a href={url} target="blank" rel="noreferrer">
                        {" "}
                        <FaGithub size={18} /> Abrir no github
                      </a>
                    </div>
                  </ProjectContent>
                </ProjectWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
