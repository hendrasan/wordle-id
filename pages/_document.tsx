/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name='description'
            content='Permainan Tebak Kata Bahasa Indonesia'
          />

          <meta property='og:url' content='https://wordle-id.vercel.app/' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Wordle ID' />
          <meta
            property='og:description'
            content='Permainan Tebak Kata Bahasa Indonesia'
          />
          <meta
            property='og:image'
            content='https://wordle-id.vercel.app/og.jpg'
          />

          <meta name='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:domain'
            content='https://wordle-id.vercel.app'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=optional'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
