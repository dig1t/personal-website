import { FILTER_CHANGE } from '../constants/actionTypes.js'

export const setFilter = filter => {
	return function(dispatch) {
		dispatch({
			type: FILTER_CHANGE,
			payload: 
		})
	}
}

export const getFilterButtons = () => {
	return Object.keys(filters).map(filter => {
		const className = classNames({
			active: this.state.filter === filters[filter]
		})
		
		return <button key={filter} className={className} onClick={this.handleFilterClick.bind(this, filter)}>{filters[filter]}</button>
	})
}