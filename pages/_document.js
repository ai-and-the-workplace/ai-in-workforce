import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="overflow-hidden">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="absolute inset-0 m-0 overflow-x-hidden overflow-y-scroll bg-white p-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
