import { combineReducers } from 'redux'

import listFilters from './list-filters'
import portfolio from './portfolio'

const allReducers = combineReducers({
	listFilters,
	portfolio
})

export default allReducers