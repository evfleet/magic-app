import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout: React.SFC<{}> = ({ children }): React.ReactElement => {
  return (
    <div>
      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
