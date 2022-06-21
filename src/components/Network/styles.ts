import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a + a {
    margin-left: 8px;
  }

  > a svg {
    width: 36px;
    height: 36px;
  }
`;
