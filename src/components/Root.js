import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import store from '../store'

import Routes from './Routes'

const history = createBrowserHistory()

export default class Root extends React.Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	}
	
	render() {
		return <Provider store={store}>
			<Router history={history}>
				<Routes />
			</Router>
		</Provider>;
	}
}