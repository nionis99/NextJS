import React from 'react';
import { AppProps } from 'next/app';
import { wrapper } from 'store';
import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
