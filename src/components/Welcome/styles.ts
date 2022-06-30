import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    flex-flow: column;
    gap: 40px;
    margin: 0 auto;
    padding: 8px;
    text-align: center;
  }
  div h1 {
    color: ${({ theme }) => theme.color};
    font-size: 2.8rem;
    line-height: 3rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.6rem;
  }
  > img {
    display: none;
  }

 
  }

  @media screen and (min-width: 1024px) {
    > div {
      text-align: start;
      align-items: flex-start;
    }
    div h1 {
      font-size: 4rem;
      line-height: 4rem;
    }

    img {
      display: block;
      width: 400px;
      height: 400px;
      margin: 0 auto;
    }

  }

  @media screen and (min-width: 784px) {
    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }

    div h1 {
      font-size: 3.6rem;
      line-height: 3.2rem;
    }
  }
`;
