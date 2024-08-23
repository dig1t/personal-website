import { Provider } from 'react-redux';
import Head from 'next/head';
import { useStore } from '../store';
import ReactGA from 'react-ga';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import '../styles/main.scss';

ReactGA.initialize('G-GLL93329SM');

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

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
        </div>
        <div id='modal-root' />
      </Provider>
    </>
  );
}

export default App;
