import Router from "./pages";
import { ThemeSwitchContextProvider } from "./contexts/ThemeSwitchContext";

const App = () => {
  return (
    <ThemeSwitchContextProvider>
      <Router />
    </ThemeSwitchContextProvider>
  );
};

export default App;
