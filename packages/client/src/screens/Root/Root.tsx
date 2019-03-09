import React from "react";
import { hot } from "react-hot-loader";

import styled from "../../styles/themed-styled";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
`;

const Root: React.SFC<{}> = (): React.ReactElement => {
  return (
    <Container>
      <p>Hello World</p>
    </Container>
  );
};

export default hot(module)(Root);
