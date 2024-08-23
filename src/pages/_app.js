import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { useStore } from '../store';
import { Analytics } from "@vercel/analytics/react"

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import '../styles/main.scss';

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  // eslint-disable-next-line react/prop-types
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Javi @dig1t - Roblox Developer</title>
          <meta
            name='viewport'
            content='width=device-width, minimum-scale=1.0'
          />
        </Head>

        <div id='app-root'>
          <Navigation></Navigation>
          <Component {...pageProps} />
          <Footer></Footer>
          <Analytics/>
        </div>
        <div id='modal-root' />
      </Provider>
    </>
  );
}

export default App;
