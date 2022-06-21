import React, { PropsWithChildren } from "react";

import Header from "../Header";
import Footer from "../Footer";
import { Container } from "./styles";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
