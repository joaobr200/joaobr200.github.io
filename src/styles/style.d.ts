import "styled-components";

export type Theme = {
  name: string;
  background: string;
  color: string;
  colors: {
    primary: string;
    secundary: string;
    gray: string;
    black: string;
    white: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
