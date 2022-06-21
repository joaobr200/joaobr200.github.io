import styled from "styled-components";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export const Header = styled.header`
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
  justify-content: space-between;
`;

export const Logo = styled.div`
  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    font-size: 32px;
    font-weight: 500;
  }

  a svg {
    width: calc(100% - 40px);
  }

  a svg.white {
    filter: brightness(0) invert(1);
  }

  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
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
