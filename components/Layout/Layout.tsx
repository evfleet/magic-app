import React from 'react';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from './styles';

interface LayoutProps {}

const Layout: React.SFC<LayoutProps> = ({ children }): React.ReactElement => {
  return (
    <Container>
      <Header />

      <Content>{children}</Content>

      <Footer />
    </Container>
  );
};

export default Layout;
