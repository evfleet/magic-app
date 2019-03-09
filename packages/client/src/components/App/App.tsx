import React from "react";
import { hot } from 'react-hot-loader';

const App: React.SFC<{}> = (): React.ReactElement => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

export default hot(module)(App)
