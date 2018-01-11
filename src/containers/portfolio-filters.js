import React from 'react'
import { Modal } from '../components/UI'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { filterChange } from '../actions/filter-action.js'

import { FILTERS, FILTER_ALL } from '../constants/filters.js'

const filterText = {
	all: 'All',
	web: 'Web',
	graphic_design: 'Graphic Design'
}

class FilterContainer extends React.Component {
	componentWillMount() {
		// initialize
		this.props.filterChange(FILTER_ALL)
	}
	
	render() {
		return <div className="filter">{
			FILTERS.map(filter => {
				const className = classNames({
					// add active class if button is the target
					active: this.props.filter === filter || (this.props.filter === null && filter === FILTER_ALL)
				})
				
				return <button key={filter} className={className}
					onClick={this.props.filterChange.bind(this, filter)}>{filterText[filter]}</button>
			})
		}</div>
	}
}

const mapStateToProps = state => {
	return {
		filter: state.listFilters.filter
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({filterChange}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)