import React from 'react'
import Layout from './Layout'

// todo: style page
export class Error extends React.Component {
	renderComponent() {
		return <div>
			Error 404
		</div>
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>
	}
}