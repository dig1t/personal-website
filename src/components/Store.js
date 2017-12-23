import React from 'react'
import Layout from './Layout'

export default class Store extends React.Component {
	renderComponent() {
		return <section className="store align-wrap">
			<h3>Coming Soon</h3>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}