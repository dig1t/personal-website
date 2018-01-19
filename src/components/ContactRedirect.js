import React from 'react'
import Layout from './Layout'

export class ContactRedirect extends React.Component {
	component() {
		return <section className="contact-redirect align-wrap">
			<h3>Thanks for submitting a question</h3>
		</section>
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.component()}</Layout>
	}
}