import React from 'react'
import Layout from './Layout'
import classNames from 'classnames'
import { Modal } from './UI'

const filters = {
	all: 'All',
	web: 'Web',
	graphic_design: 'Graphic Design'
}

export default class Portfolio extends React.Component {
	constructor() {
		super()
		
		this.state = {
			portfolio: [
				{
					name: 'A very long project title',
					description: 'short description about project 1.',
					type: filters.web,
					thumbnail: 'https://picsum.photos/600/500',
					id: 'btrbrgbfveddr',
					username: 'Digit'
				},
				{
					name: 'Project 2',
					description: 'short description about project 2.',
					type: filters.graphic_design,
					thumbnail: 'https://picsum.photos/800/1000',
					id: 'rymtrh45jny5tnhrthth',
					username: 'Digit'
				},
				{
					name: 'Ipsum',
					description: 'short description about project 3.',
					type: filters.web,
					thumbnail: 'https://picsum.photos/300/400',
					id: 'h56jde76y67jnythjns54h',
					username: 'Digit'
				},
				{
					name: 'Lorem Branding',
					description: 'short description about projec-t 4.',
					type: filters.web,
					thumbnail: 'https://picsum.photos/500/800',
					id: 'k6rdey5j5e5j',
					username: 'Digit'
				}
			],
			filter: filters.all, // default filter
			filterButtons: null,
			filterTarget: null,
			modalTargetId: '',
			modalOpen: false
		}
		
		this.state.filterButtons = this.getFilterButtons()
		this.state.projectsList = this.state.portfolio // show all projects by default
	}
	
	// give current filter button the active class
	getFilterButtons() {
		return Object.keys(filters).map(filter => {
			const className = classNames({
				active: this.state.filter === filters[filter]
			})
			
			return <button key={filter} className={className} onClick={this.handleFilterClick.bind(this, filter)}>{filters[filter]}</button>
		})
	}
	
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
				
				<div className="filter">{this.state.filterButtons}</div>
				
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
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}