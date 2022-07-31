import Layout from "../components/Ui/Layout";
import Welcome from "../components/Home/Welcome";
import About from "../components/Home/About";
import DevelopmentStack from "../components/Home/Development";
import Projects from "../components/Home/Projects";

const Home = () => {
  return (
    <Layout>
      <Welcome />
      <About />
      <DevelopmentStack />
      <Projects />
    </Layout>
  );
};

export default Home;
