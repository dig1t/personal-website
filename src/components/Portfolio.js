import React from 'react'
import Layout from './Layout'

export default class Portfolio extends React.Component {
	renderComponent() {
		return <section className="portfolio">
			<h1>folio</h1>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}