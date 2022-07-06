import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.secundary};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border-bottom-right-radius: 100px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto 0;

  img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    margin-right: 8px;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  margin: 15px 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  p {
    font-size: 1rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  a {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray[300]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
