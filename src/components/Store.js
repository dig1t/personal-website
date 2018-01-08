import React from 'react'
import Layout from './Layout'

export class Store extends React.Component {
	component() {
		return <section className="store align-wrap">
			<h3>Coming Soon</h3>
		</section>
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.component()}</Layout>
	}
}