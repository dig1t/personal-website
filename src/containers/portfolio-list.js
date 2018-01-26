import React from 'react'
import { Modal } from '../components/UI'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { click, closeModal } from '../actions/portfolio.js'

class PortfolioContainer extends React.Component {
	render() {
		return <div className="projects-grid">{
			this.props.list.map(project => {
				return <React.Fragment key={project.id}>
					<div className="project" onClick={this.props.click.bind(null, project.id)}>
						<img src={project.thumbnail || project.image} />
						<div className="name">
							<h3>{project.name}</h3>
						</div>
					</div>
					<Modal
						title={project.name}
						description={project.description}
						type="image"
						image={project.thumbnail || project.image}
						toggleModal={this.props.closeModal}
						open={this.props.modalTargetId === project.id && this.props.modalOpen}
					/>
				</React.Fragment>
			})
		}</div>
	}
}

const mapStateToProps = state => {
	return {
		list: state.listFilters.list,
		modalTargetId: state.portfolio.modalTargetId,
		modalOpen: state.portfolio.modalOpen
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({click, closeModal}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer)