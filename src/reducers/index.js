import { combineReducers } from 'redux'

import ui from './ui'
import { fetchStatus, fetchErrors } from './fetchStatus'

export default combineReducers({
	ui,
	fetchStatus,
	fetchErrors
})