import { motion } from "framer-motion";
import styled from "styled-components";

export const WelcomeSection = styled.section`
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    gap: 1rem;
    padding: 8px;
    text-align: center;

    h1 {
      color: ${({ theme }) => theme.color};
      font-size: 2rem;
    }

    h3 {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.color};
    }

    p {
      font-size: 1rem;
      max-width: 400px;
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 100px 0 0 0;
    flex-direction: row;

    > div {
      text-align: start;
      justify-content: space-between;
      align-items: flex-start;
      h1 {
        font-size: 3rem;
      }

      span {
        font-size: 1rem;
      }
      p {
        width: 400px;
      }
    }
  }
`;

export const ImgWrapper = styled(motion.div)`
  overflow: hidden;

  figure {
    margin: 0 auto;
  }

  svg {
    width: 180px;
    height: 180px;
  }

  @media screen and (min-width: 1024px) {
    svg {
      max-width: 250px;
      width: 100%;
      height: 250px;
    }
  }
`;

export const ScrollDownWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 2rem 0 0 0%;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > svg {
      animation: fade 2s infinite;
      color: ${({ theme }) => theme.color};
    }

    > svg:nth-child(1) {
      animation-delay: 1.6s;
    }

    > svg:nth-child(2) {
      margin: -15px 0 0 0;
      animation-delay: 1.8s;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    margin: 2.5rem 0 0 0;
  }
`;
