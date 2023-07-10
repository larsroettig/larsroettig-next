// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import '../styles/tailwind.css';
import '../styles/code.css';
import dynamic from 'next/dynamic';
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '../components/Header';

const Footer = dynamic(() => import(`../components/Footer`));

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="yandex-verification" content="70c87e285704515f" />
      </Head>
      <Header />
      <Component {...pageProps} />

      <Footer />
    </>
  );
}
