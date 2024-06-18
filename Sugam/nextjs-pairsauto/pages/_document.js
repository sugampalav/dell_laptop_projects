// pages/_document.js
// import { Html, Head, Main, NextScript } from "next/document";
import { Html } from "next/dist/pages/_document";
import { Head } from "next/dist/pages/_document";
import { Main } from "next/dist/pages/_document";
import { NextScript } from "next/dist/pages/_document";

function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
