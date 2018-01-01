import React from 'react'
import Layout from './Layout'

export default class Gallery extends React.Component {
	renderComponent() {
		return <section className="gallery">
			<h1>gallery</h1>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}