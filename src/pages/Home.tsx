import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import About from "../components/About";
import DevelopmentStack from "../components/Development";
import Projects from "../components/Projects";

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
