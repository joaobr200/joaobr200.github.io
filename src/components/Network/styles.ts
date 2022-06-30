import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a + a {
    margin-left: 8px;
  }

  > a svg {
    width: 36px;
    height: 36px;
  }
`;
