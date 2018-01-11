import { FILTER_UPDATE } from '../constants/actionTypes.js'

const reducer = (state={
  filter: null, // default filter
  filterTarget: null, // current filter button
	list: null
}, action) => {
	switch(action.type) {
		case FILTER_UPDATE: {
			return {
				...state,
				filter: action.payload.filter,
				list: action.payload.list
			}
		}
	}
	
	return state
}

export default reducer