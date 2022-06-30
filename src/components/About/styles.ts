import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;
  padding: 8px;

  background: ${({ theme }) => theme.colors.secundary};
  border-bottom-right-radius: 188px;
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    margin-right: 8px;
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  margin: 15px 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  article {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
      color: ${({ theme }) => theme.colors.gray[300]};
    }

    p {
      margin: 8px;
      color: ${({ theme }) => theme.colors.gray[300]};
    }

    a {
      color: ${({ theme }) => theme.colors.gray[300]};
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media screen and (max-width: 768px) {
      a {
        font-size: 1rem;
      }
    }
  }
`;
