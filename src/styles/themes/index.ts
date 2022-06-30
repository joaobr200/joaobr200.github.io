const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};

const gray = {
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
};

export const dark = {
  name: "dark",
  background: "linear-gradient(270deg,#09090a,#121214);",
  color: "#fdfffe",
  colors: {
    primary: "#1c64f2",
    secundary: "#121214",
    gray,
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
    primary: "#1c64f2",
    secundary: "#161e2e",
    gray,
    black: "#040608",
    white: "#f1f1c6",
  },
  shadows,
};
