import { combineReducers } from 'redux'

//import users from './users'
import listFilters from './list-filters'
import portfolio from './list-filters'

const allReducers = combineReducers({
	listFilters,
	portfolio
})

export default allReducers