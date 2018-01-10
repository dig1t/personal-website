import React from 'react'
import Layout from './Layout'
import classNames from 'classnames'
import { Modal } from './UI'
import { connect } from 'react-redux'
import { getFilterButtons } from '../actions/filter-action.js'

// give current filter button the active class

class Portfolio extends React.Component {
	/*constructor() {
		super()
		
		//this.state.filterButtons = this.getFilterButtons()
		//this.state.projectsList = this.state.portfolio // show all projects by default
	}*/
	
	handleFilterClick(filter, event) {
		this.setState({filter: filters[filter]}, () => {
			// update projects list with filtered results
			const projectsList = this.state.portfolio.filter(project => {
				return this.state.filter === project.type || this.state.filter === filters.all
			})
			
			this.setState({projectsList})
			this.setState({filterButtons: this.getFilterButtons()})
		})
	}
	
	handleModalClose = () => this.setState({
		modalOpen: false
	})
	
	handleProjectClick = (id, event, open) => {
		this.setState(prevState => ({
			// open modal if prev target id does not match
			// if it matches then reverse the boolean value of modalOpen
			modalOpen: prevState.modalTargetId === id ? !prevState.modalOpen : true,
			// set to the most recently clicked project id
			modalTargetId: id
		}))
	}
	
	renderComponent() {
		return <section className="portfolio">
			<div className="wrap">
				<div className="heading row">
					<div className="col-6">
						<h1>Portfolio</h1>
						<p>Here is a list of projects I have worked on.</p>
					</div>
					<div className="col-6">
						<div className="page">02</div>
					</div>
				</div>
				
				<div className="filter">{this.state.getFilterButtons()}</div>
				
				<div className="projects-grid">
					{this.state.projectsList.map(project => {
						return [
							<div key={project.id} className="project" onClick={this.handleProjectClick.bind(null, project.id)}>
								<img src={project.thumbnail || project.image} />
								<div className="name">
									<h2>{project.name}</h2>
								</div>
							</div>,
							<Modal
								key={project.id + '-modal'}
								title={project.name}
								type="image"
								image={project.thumbnail || project.image}
								toggleModal={this.handleModalClose.bind(this)}
								open={this.state.modalTargetId === project.id && this.state.modalOpen}
							/>
						]
					})}
				</div>
			</div>
		</section>
	}
	
	render() {
		console.log('portfolio!')
		console.log(this.props.portfolio)
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>
	}
}

const mapStateToProps = (state) => {
	console.log('portfolio??')
	return {
		listFilters: state.listFilters,
		portfolio: state.portfolio
	}
}

const mapDispatchToProps = (dispatch) => {
	console.log('disp to props')
	getFilterButtons: getFilterButtons
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)