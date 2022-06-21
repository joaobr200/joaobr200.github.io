import React from "react";

import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import About from "../components/About";
import DevelopmentStack from "../components/DevelopmentStack";

const Home = () => {
  return (
    <Layout>
      <Welcome />
      <About />
      <DevelopmentStack />
    </Layout>
  );
};

export default Home;
