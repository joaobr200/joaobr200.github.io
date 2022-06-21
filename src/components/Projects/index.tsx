import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import { Project, ProjectWrapper } from "./styles";

const Projects: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  // function handleClickNavigateToProject(url: string) {
  //  window.location.replace(url);
  // }

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className="container">
      <Project style={{ opacity }}>
        <h1>Projetos</h1>
        <ProjectWrapper></ProjectWrapper>
      </Project>
    </div>
  );
};

export default Projects;
