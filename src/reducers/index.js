import { combineReducers } from 'redux'

import uiEvents from './ui-events'
import listFilters from './list-filters'
import portfolio from './portfolio'

const allReducers = combineReducers({
	uiEvents,
	listFilters,
	portfolio
})

export default allReducers