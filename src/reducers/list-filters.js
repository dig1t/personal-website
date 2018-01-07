import { FILTER_CHANGE, FILTERS_ALL } from '../actionTypes.js'

const reducer = (state={
  filter: FILTERS_ALL, // default filter
  filterButtons: null,
  filterTarget: null,
  modalTargetId: '',
  modalOpen: false
}, action) => {
	switch(action.type) {
		case FILTER_CHANGE: {
			return {...state, filter: action.filter}
		}
	}
	
	return state
}

export default reducer