import React from "react";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout: React.SFC<{}> = ({ children }): React.ReactElement => {
  return (
    <React.Fragment>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
