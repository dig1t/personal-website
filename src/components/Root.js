import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import PropTypes from 'prop-types'

import Routes from './Routes'
import reducers from '../reducers'

const history = createBrowserHistory()

const logger = store => next => action => {
	console.group(action.type)
	console.info('dispatching', action)
	
	let result = next(action)
	
	console.log('next state', store.getState())
	console.groupEnd(action.type)
	
	return result
}

const store = createStore(
	reducers,
	//window.__INITIAL_STATE__,
	applyMiddleware(ReduxThunk, logger)
)

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