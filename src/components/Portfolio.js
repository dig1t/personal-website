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
					thumbnail: 'https://picsum.photos/600/500',
					id: 'wpCSzGGjPIKjfsajvWfIBb55',
					username: 'Digit'
				},
				{
					name: 'project 2',
					description: 'short description about project 2.',
					thumbnail: 'https://picsum.photos/800/1000',
					id: 'wpCSzGGjPIKjOXSjvWebrf55',
					username: 'Digit'
				},
				{
					name: 'project 3',
					description: 'short description about project 3.',
					thumbnail: 'https://picsum.photos/300/400',
					id: 'wpCSzGGjPIawfnSjvWfIBb55',
					username: 'Digit'
				},
				{
					name: 'project 4',
					description: 'short description about project 4.',
					thumbnail: 'https://picsum.photos/500/800',
					id: 'wpCSzGGjPIKjOXSjvWfIad55',
					username: 'Digit'
				}
			]
		}
	}
	
	renderComponentMain() {
		return <section className="portfolio">
			{this.state.portfolio.map((project) => {
				return <div className="project">
					<img src={project.thumbnail} />
				</div>
			})}
		</section>;
	}
	
	renderComponent() {
		return <section className="portfolio align-wrap">
			<h3>Coming Soon</h3>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}