import React, { ButtonHTMLAttributes } from "react";

import { FullButton, LargeButton, MediumButton, SmallButton } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: string;
}

const Button: React.FC<IButtonProps> = ({ children, size, ...props }) => {
  if (size === "full") {
    return <FullButton {...props}>{children}</FullButton>;
  }
  if (size === "lg") {
    return <LargeButton {...props}>{children}</LargeButton>;
  }
  if (size === "md") {
    return <MediumButton {...props}>{children}</MediumButton>;
  }
  if (size === "sm") {
    return <SmallButton {...props}>{children}</SmallButton>;
  }
  if (!size) {
    return <FullButton {...props}>{children}</FullButton>;
  }

  return <></>;
};

export default Button;
