const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};

export const dark = {
  name: "dark",
  background: "linear-gradient(270deg,#09090a,#121214);",
  color: "#fdfffe",
  colors: {
    primary: "#1C64F2",
    secundary: "#121214",
    gray: "#e1e1e6",
    black: "#040608",
    white: "#f1f1c6",
  },
  shadows,
};

export const light = {
  name: "light",
  background: "linear-gradient(270deg,#e5e7eb,#f1f1c6);",
  color: "#121214",
  colors: {
    primary: "#1C64F2",
    secundary: "#161e2e",
    gray: "#e5e7eb",
    black: "#040608",
    white: "#f1f1c6",
  },
  shadows,
};
