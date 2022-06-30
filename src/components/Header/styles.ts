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
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: background 0.2s linear;
`;

export const NavBar = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    font-size: 32px;
    font-weight: 500;
  }

  a img {
    width: calc(100% - 40px);
  }

  a img.white {
    filter: brightness(0) invert(1);
  }

  cursor: pointer;
`;

export const MenuList = styled.ul`
  display: none;
  gap: 16px;

  li a {
    color: ${({ theme }) => theme.colors.gray[400]};
    transition: color 200ms ease;
  }

  li a:hover {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const NetworkWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 18px;

    div {
      cursor: pointer;
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
