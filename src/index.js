import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/Root'

const initialState = window.__INITIAL_STATE__ || {}

if (window.__INITIAL_STATE__) delete window.__INITIAL_STATE__

ReactDOM.hydrate(
	<Root/>,
	document.getElementById('app-root')
)