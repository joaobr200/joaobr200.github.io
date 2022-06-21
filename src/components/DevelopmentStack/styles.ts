import styled from "styled-components";

export const Stack = styled.div`
  width: 100%;
  margin: 15px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  article {
    width: 100%;
    margin: 30px 45px 30px 8px;
    max-width: 140px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;
  }

  article img {
    width: 188px;
    height: 200px;
  }

  article p {
    color: ${({ theme }) => theme.color};
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
  }

  @media screen and (max-width: 946px) {
    overflow-x: scroll;
  }
`;

export const About = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 560px));
  justify-content: space-evenly;
  gap: 40px;

  div {
    color: ${({ theme }) => theme.color};
  }

  div h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  div p {
    margin: 8px 0;
    font-weight: 500;
    line-height: 1.2rem;
  }
`;
