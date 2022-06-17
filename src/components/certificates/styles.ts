import styled from "styled-components";

export const Container = styled.section`
  text-align: center;
  h1.title {
    font-size: 2rem;
    line-height: 2.8rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  @media screen and (max-width: 1026px) {
    overflow: scroll;

    article:nth-child(1) {
      margin-left: 300px;
    }
  }

  @media screen and (max-width: 736px) {
    article:nth-child(1) {
      margin-left: 400px;
    }
  }

  @media screen and (max-width: 676px) {
    article:nth-child(1) {
      margin-left: 500px;
    }
  }

  @media screen and (max-width: 597px) {
    article:nth-child(1) {
      margin-left: 700px;
    }
  }
`;

export const CertificateContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid: repeat(2, 300px) / auto-flow 300px;
  }
`;

export const CertificateWrapper = styled.article`
  position: relative;

  width: 250px;
  height: 230px;
  margin: 30px 8px 30px 8px;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.gray};
  box-shadow: 0 0 5px 2.5 rgba(0, 0, 0, 0.8);

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  div.body {
    padding: 8px;
    p {
      font-size: 1.2rem;
    }

    p.school {
      font-weight: 700;
    }
  }
`;

export const CertificateIcon = styled.div`
  position: absolute;
  top: 150px;
  right: 0;
`;

export const Image = styled.img`
  width: 250px;
  height: 150px;
`;
