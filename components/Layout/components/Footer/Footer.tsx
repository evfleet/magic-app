import React from 'react';

import { Container, Wrapper } from './styles';

interface FooterProps {}

const Footer: React.SFC<FooterProps> = (): React.ReactElement => {
  return (
    <Wrapper>
      <Container>
        <footer>Footer</footer>
      </Container>
    </Wrapper>
  );
};

export default Footer;
