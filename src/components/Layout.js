import React from 'react'
import Navigation from './Navigation'
import { ScrollContainer } from './UI'

export default class Layout extends React.Component {
	render() {
		return <main>
			<Navigation page={this.props.page} />
			<ScrollContainer className="scroll-container content" page={this.props.page}>{this.props.children}</ScrollContainer>
		</main>
	}
}