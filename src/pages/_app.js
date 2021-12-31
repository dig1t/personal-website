import { Provider } from 'react-redux'
import Head from 'next/head'
import { configureStore } from '../store'

import '../styles/main.scss'

function App({ Component, pageProps }) {
	const store = configureStore(pageProps.initialReduxState)
	
	return <>
		<Provider store={store}>
			<Head>
				<title>dig1t</title>
				<meta charSet="utf-8" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" type="image/png" href="/i/icon@16x16.png" sizes="16x16" />
				<link rel="icon" type="image/png" href="/i/icon@32x32.png" sizes="32x32" />
				<link rel="icon" type="image/png" href="/i/icon@96x96.png" sizes="96x96" />
				<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
				<link rel="preconnect" href="https://use.fontawesome.com" crossOrigin="true" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,700i,800" />
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
				<meta name="theme-color" content="#e74c3c" />
			</Head>
			
			<div id="app-root">
				<Component { ...pageProps } />
			</div>
			<div id="modal-root" />
		</Provider>
	</>
}

export default App