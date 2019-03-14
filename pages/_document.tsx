/* eslint-disable */
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { NextDocumentContext } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}

export default CustomDocument;
