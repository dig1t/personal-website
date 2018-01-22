import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'

export class Error extends React.Component {
	renderComponent() {
		return <div className="error-page align-wrap">
			<div className="text">404</div>
			<Link to="/">go home</Link>
		</div>
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>
	}
}