import Router from "./pages";
import { ThemeSwitchContextProvider } from "./contexts/ThemeSwitchContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => {
  return (
    <ThemeSwitchContextProvider>
      <Router />
    </ThemeSwitchContextProvider>
  );
};

export default App;
