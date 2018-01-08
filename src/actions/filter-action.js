import { FILTER_CHANGE } from '../actionTypes.js'

export function setFilter(filter) {
	return {
		type: FILTER_CHANGE
	}
}