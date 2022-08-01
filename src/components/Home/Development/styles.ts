import { motion } from "framer-motion";
import styled from "styled-components";

export const DevelopmentSection = styled(motion.section)`
  min-height: 100vh;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    margin: 100px 0 0 0;
  }
`;

export const DevelopmentStackItems = styled.ul`
  width: 100%;
  margin: 15px 0;

  display: flex;
  align-items: center;

  pointer-events: none;
  user-select: none;
  will-change: transform;

  animation-name: loop;
  animation-duration: 25s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;

  @keyframes loop {
    0% {
      transform: translateX(0%);
      -webkit-transform: translateX(0%);
    }

    100% {
      transform: translateX(calc(-100vw - 104px));
      -webkit-transform: translateX(calc(-100vw - 104px));
    }
  }

  > li figure {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  > li figure figcaption {
    color: ${({ theme }) => theme.color};
    font-size: 0.8rem;
    font-weight: 500;
  }
  > li figure img {
    width: 120px;
    height: 120px;
    margin: 0 0 0.5rem 0;
  }

  > li + li {
    margin-left: 6rem;
  }
`;

export const AboutStack = styled(motion.div)`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  article {
    display: flex;
    gap: 1rem;
    padding: 1.2rem;
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.shadows.xl};

    color: ${({ theme }) => theme.colors.gray[300]};
    background-color: ${({ theme }) => theme.colors.secundary};
  }

  article div:nth-child(1) {
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 100px;
    }
  }

  article div:nth-child(2) {
    width: 400px;
    h3 {
      font-size: 1rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray[300]};
    }
    p {
      font-size: 0.9rem;
      margin: 0.5rem 0;
      line-height: 1.6rem;
    }
  }
`;
