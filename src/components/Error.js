import React from 'react'
import Layout from './Layout'

// todo: style page
export class Error extends React.Component {
	renderComponent() {
		return <div className="error-page align-wrap">
			<div className="text">404</div>
		</div>
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>
	}
}