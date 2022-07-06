import { motion } from "framer-motion";
import styled from "styled-components";

interface ProjectWrapperProps {
  currentTheme: string;
}

export const ProjectsSection = styled(motion.section)`
  min-height: 100vh;

  h1 {
    font-size: 2rem;
  }
`;

export const Container = styled.div`
  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProjectWrapper = styled.article<ProjectWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 720px;
  margin: 1rem auto;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  background-color: ${({ theme, currentTheme }) =>
    currentTheme === "dark" ? theme.colors.secundary : ""};

  .not-image {
    width: 100%;
    min-height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    background-color: red;
  }
`;

export const ProjectContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;

  div:nth-child(1) {
    strong {
      font-size: 1.4rem;
    }
  }

  div:nth-child(2) {
    display: flex;
    gap: 1rem;

    > a:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      color: #fff;
      background: #000;
      padding: 0.2rem;
      border-radius: 0.4rem;
    }
  }
`;
