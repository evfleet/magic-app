import React from 'react';

import { Container, Wrapper } from './styles';

interface ContentProps {}

const Content: React.SFC<ContentProps> = ({ children }): React.ReactElement => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Content;
