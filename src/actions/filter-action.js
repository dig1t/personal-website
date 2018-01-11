import { FILTER_UPDATE } from '../constants/actionTypes.js'
import { FILTER_ALL } from '../constants/filters.js'

export const filterChange = filter => {
	return (dispatch, getState) => {
		// no point in changing filter to the same filter
		if (getState().listFilters.filter !== filter) dispatch({
			type: FILTER_UPDATE,
			payload: {
				filter,
				list: getState().portfolio.data.filter(project => {
					return project.type === filter || filter === FILTER_ALL
				})
			}
		})
	}
}