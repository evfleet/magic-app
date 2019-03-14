/* eslint-disable */
import React from 'react';
import App, { Container } from 'next/app';

import { CSSReset, GlobalStyle, theme} from '../styles/';

class CustomApp extends App {
  static async getInitialProps({ Component, context }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(context);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <CSSReset />
        <GlobalStyle theme={theme} />
        <Container>
          <Component {...pageProps} />
        </Container>
      </React.Fragment>
    );
  }
}

export default CustomApp