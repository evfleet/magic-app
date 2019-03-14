import React from 'react';

import { Container, Wrapper } from './styles';

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = (): React.ReactElement => {
  return (
    <Wrapper>
      <Container>
        <header>Header</header>
      </Container>
    </Wrapper>
  );
};

export default Header;
