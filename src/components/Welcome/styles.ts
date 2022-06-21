import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 600px;
    margin-right: 24px;
  }

  h1 {
    color: ${({ theme }) => theme.color};
    font-size: 4.6rem;
  }

  h1::after {
    content: "";
    background: ${({ theme }) => theme.color};
    width: 4px;
    height: 55px;
    display: inline-block;
    margin-left: 8px;
    animation: blink 0.2s linear infinite alternate;

    @keyframes blink {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  img {
    width: 400px;
    height: 400px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 3.4rem;
    }
  }

  @media screen and (max-width: 784px) {
    > div {
      display: flex;
      align-items: center;
      flex-flow: column;
      gap: 40px;
      text-align: center;
      margin: 0 auto;
    }
    h1 {
      font-size: 2.8rem;
      line-height: 1.6rem;
    }
    p {
      font-size: 1.1rem;
      line-height: 1.6rem;
    }
    > img {
      display: none;
    }
  }
`;
