import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Head>
      <title>NextJS App</title>
    </Head>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
