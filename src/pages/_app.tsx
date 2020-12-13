import '../styles/tailwind.css';
import 'styles/code.css';

import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import ScrollUp from '../components/ScrollUp';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ScrollUp />
      <Footer />
    </>
  );
}

export default MyApp;
