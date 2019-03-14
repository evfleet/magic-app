/* eslint-disable */
import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from '../styles/themed-styled';

import { CSSReset, GlobalStyle, theme } from '../styles/';

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <CSSReset />
        <GlobalStyle theme={theme} />

        <ThemeProvider theme={theme}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default CustomApp