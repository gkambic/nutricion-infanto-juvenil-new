// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Layout from '../app/layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
    <PrimeReactProvider>
        <Component {...pageProps} />
    </PrimeReactProvider>
    </Layout>
  );
};

export default MyApp;
