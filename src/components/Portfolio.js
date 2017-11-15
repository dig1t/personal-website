import React from 'react'
import Layout from './Layout'

const designGallery = [
	{
		name: 'project 1',
		description: 'short description about project 1.',
		thumbnail: '/compiled/i/gallery/design/project-1/thumb.jpg',
		id: 'wpCSzGGjPIKjfsajvWfIBb55',
		username: 'Digit'
	},
	{
		name: 'project 2',
		description: 'short description about project 2.',
		thumbnail: '/compiled/i/gallery/design/project-2/thumb.jpg',
		id: 'wpCSzGGjPIKjOXSjvWebrf55',
		username: 'Digit'
	},
	{
		name: 'project 3',
		description: 'short description about project 3.',
		thumbnail: '/compiled/i/gallery/design/project-3/thumb.jpg',
		id: 'wpCSzGGjPIawfnSjvWfIBb55',
		username: 'Digit'
	},
	{
		name: 'project 4',
		description: 'short description about project 4.',
		thumbnail: '/compiled/i/gallery/design/project-4/thumb.jpg',
		id: 'wpCSzGGjPIKjOXSjvWfIad55',
		username: 'Digit'
	}
]

export default class Portfolio extends React.Component {
	renderComponent() {
		return <section className="portfolio">
			<div className="row">
				<div className="col-4">
					<img src="https://picsum.photos/600/500" />
				</div>
				<div className="col-8">
					<img src="https://picsum.photos/800/1000" />
				</div>
			</div>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}