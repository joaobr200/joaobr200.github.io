import React from "react";
import Head from "next/head";

import Nav from "../nav";
import Footer from "../footer";
import { Container } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
