import React from 'react'
import { Link } from 'react-router-dom'

const links = [
	// [path, name]
	['/', 'Home'],
	['/portfolio', 'Portfolio'],
	['/contact', 'Contact']
]

export default class Footer extends React.Component {
	render() {
		return <footer>
			<Link to="/privacy">Privacy Policy</Link>
			<div>© {(new Date()).getFullYear()} Javier Mejia All Rights Reserved</div>
		</footer>
	}
}