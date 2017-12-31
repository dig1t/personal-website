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
					id: 'wpCSzGGjPIKjfsajvWfIBb55',
					username: 'Digit'
				},
				{
					name: 'Project 2',
					description: 'short description about project 2.',
					type: filters.graphic_design,
					thumbnail: 'https://picsum.photos/800/1000',
					id: 'wpCSzGGjPIKjOXSjvWebrf55',
					username: 'Digit'
				},
				{
					name: 'Ipsum',
					description: 'short description about project 3.',
					type: filters.web,
					thumbnail: 'https://picsum.photos/300/400',
					id: 'wpCSzGGjPIawfnSjvWfIBb55',
					username: 'Digit'
				},
				{
					name: 'Lorem Branding',
					description: 'short description about projec-t 4.',
					type: filters.web,
					thumbnail: 'https://picsum.photos/500/800',
					id: 'wpCSzGGjPIKjOXSjvWfIad55',
					username: 'Digit'
				}
			],
			filter: filters.all, // default filter
			filterButtons,
			filterTarget: null,
			modalOpen: false
		}
		
		const filterButtons = this.getFilterButtons()
		
		this.state.filterButtons = filterButtons
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
	
	handleProjectClick(event) {
		/*var img = _(this);
		var source = img.data('image');
		
		_.modal.image(source);*/
	}
	
	toggleModal = event => {
		console.log('togglemodal called setting to: ', !this.state.modalOpen)
		this.setState(prevState => ({
			modalOpen: !prevState.modalOpen
		}))
	}
	
	component() {
		return <section className="portfolio">
			<div className="wrap">
				<div className="heading">
					<h1>Portfolio</h1>
					<p>Here is a list of projects I have worked on.</p>
				</div>
				<div className="filter">
					{this.state.filterButtons}
				</div>
				<div>
					<button onClick={this.toggleModal}>Open Modal</button>
					<Modal title="Header" toggleModal={this.toggleModal} open={this.state.modalOpen}>
						<p>Test</p>
					</Modal>
				</div>
				<div className="projects-grid">
					{this.state.projectsList.map(project => {
						return <div key={project.id} className="project"
						data-image={project.image || project.thumbnail} data-id={project.id}
						onClick={this.handleProjectClick.bind(this)}>
							<img src={project.thumbnail || project.image} />
							<div className="name">
								<h2>{project.name}</h2>
							</div>
						</div>;
					})}
				</div>
			</div>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.component()}</Layout>;
	}
}