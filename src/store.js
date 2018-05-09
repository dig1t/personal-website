import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import { windowResize } from './actions/ui-events.js'

const logger = store => next => action => {
	console.group(action.type)
	console.info('dispatching', action)
	
	let result = next(action)
	
	console.log('next state', store.getState())
	console.groupEnd(action.type)
	
	return result
}

export const configureStore = initialState => {
	const store = createStore(
		reducers,
		initialState,
		applyMiddleware(thunk, logger)
	)
	
	if (typeof window !== 'undefined') {
		window.addEventListener('resize', () => {
			store.dispatch(window.innerWidth, window.innerHeight)
		})
	}
	
	return store
}