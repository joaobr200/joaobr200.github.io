import styled from "styled-components";
import { motion } from "framer-motion";
import * as SwitchPrimitive from "@radix-ui/react-switch";

interface MenuProps {
  isOpen: boolean;
}

export const Nav = styled.header`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 8px;

  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: background 0.2s linear;
`;

export const NavBar = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.div`
  svg {
    width: 75px;
    height: 75px;
    border-radius: 9999px;
  }

  cursor: pointer;
`;

export const MenuList = styled.ul`
  display: none;
  gap: 16px;

  li a {
    color: ${({ theme }) => theme.color};
    transition: color 200ms ease;
  }

  li a:hover {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const NetworkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  > div:nth-child(1) {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    > div:nth-child(1) {
      display: block;
      align-items: center;
      gap: 18px;
    }
  }
`;

export const MenuButton = styled.div`
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const StyledSwitch = styled(SwitchPrimitive.Root)`
  width: 42px;
  height: 25px;
  border-radius: 9999px;
  position: relative;
  background-color: white;
  box-shadow: 0 2px 2px ${({ theme }) => theme.colors.black};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.background};
  }
`;

export const StyledThumb = styled(SwitchPrimitive.Thumb)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 9999px;
  box-shadow: 0 2px 2px ${({ theme }) => theme.colors.black};
  transition: transform 100ms linear;
  transform: translateX(-6px);
  &[data-state="checked"] {
    transform: translateX(14px);
    background-color: white;
  }
`;
