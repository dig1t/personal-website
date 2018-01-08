import React from 'react'
import Navigation from './Navigation'

export default class Layout extends React.Component {
	render() {
		return <main>
			<Navigation page={this.props.page} />
			<div className="content" page={this.props.page}>{this.props.children}</div>
		</main>
	}
}