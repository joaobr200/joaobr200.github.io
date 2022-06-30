import styled from "styled-components";

export const Rodape = styled.footer`
  width: 100%;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  background: ${({ theme }) => theme.colors.secundary};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: background 0.2s linear;

  strong {
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 1rem;
  }

  span {
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: 1rem;
  }
`;
