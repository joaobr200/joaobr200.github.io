import styled from "styled-components";
import { motion } from "framer-motion";

export const Dropdown = styled(motion.div)`
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.secundary};
  padding: 8px;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border-bottom-right-radius: 72px;
  z-index: 50;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const DropdownList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  li a {
    color: ${({ theme }) => theme.colors.gray[400]};
    transition: color 200ms ease;
  }

  li a:hover {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  li:last-of-type {
    margin-top: 20px;
  }
`;
