import React from 'react'
import Layout from './Layout'

export default class Portfolio extends React.Component {
	constructor() {
		super()
		
		this.state = {
			portfolio: [
				{
					name: 'project 1',
					description: 'short description about project 1.',
					thumbnail: '/assets/i/portfolio-hero.jpeg',
					thumbnail2: 'https://picsum.photos/600/500',
					id: 'wpCSzGGjPIKjfsajvWfIBb55',
					username: 'Digit'
				},
				{
					name: 'project 2',
					description: 'short description about project 2.',
					thumbnail: '/assets/i/portfolio-hero.jpeg',
					thumbnail2: 'https://picsum.photos/800/1000',
					id: 'wpCSzGGjPIKjOXSjvWebrf55',
					username: 'Digit'
				},
				{
					name: 'project 3',
					description: 'short description about project 3.',
					thumbnail: '/assets/i/portfolio-hero.jpeg',
					thumbnail2: 'https://picsum.photos/300/400',
					id: 'wpCSzGGjPIawfnSjvWfIBb55',
					username: 'Digit'
				},
				{
					name: 'project 4',
					description: 'short description about projec-t 4.',
					thumbnail: '/assets/i/portfolio-hero.jpeg',
					thumbnail2: 'https://picsum.photos/500/800',
					id: 'wpCSzGGjPIKjOXSjvWfIad55',
					username: 'Digit'
				}
			]
		}
	}
	
	component() {
		return <section className="portfolio">
			<div className="hero align-wrap">
				<div className="headings">
					<h1>Portfolio</h1>
					<p>Here is a list of projects I have worked on.</p>
				</div>
			</div>
			<div className="projects-grid">
				{this.state.portfolio.map((project) => {
					return <div key={project.id} className="project">
						<img src={project.thumbnail} />
					</div>;
				})}
				{this.state.portfolio.map((project) => {
					return <div key={project.id} className="project">
						<img src={project.thumbnail} />
					</div>;
				})}
			</div>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.component()}</Layout>;
	}
}