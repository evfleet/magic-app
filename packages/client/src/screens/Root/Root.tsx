import React from "react";
import { hot } from "react-hot-loader";

import Layout from "../../components/Layout";

const Root: React.SFC<{}> = (): React.ReactElement => {
  return (
    <Layout>
      <p>Hello World</p>
    </Layout>
  );
};

export default hot(module)(Root);
