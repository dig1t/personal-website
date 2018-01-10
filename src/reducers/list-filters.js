import { FILTER_CHANGE } from '../constants/actionTypes.js'
import { FILTER_ALL } from '../constants/filters.js'

const reducer = (state={
  filter: FILTERS_ALL, // default filter
  filterButtons: null, // filled by action
  filterTarget: null, // current filter button
  modalTargetId: '', // id of project to view
  modalOpen: false // closed by default
}, action) => {
	switch(action.type) {
		case FILTER_CHANGE: {
			return {...state, filter: action.filter}
		}
	}
	
	return state
}

export default reducer