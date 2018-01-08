import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
//import Burger from './UI'

const links = [
	// [path, name]
	['/', 'Home'],
	['/portfolio', 'Portfolio'],
	//['/store', 'Store'],
	['/contact', 'Contact']
]

export default class Navigation extends React.Component {
	render() {
		return <nav>
			<Link className="logo" to="/"><img src="/assets/i/logo.svg" height="35px" /></Link>
			<ul className="align-wrap">
				{links.map((link) => {
					const className = classNames({
						active: this.props.page === link[0]
					})
					
					return <li key={link[0]} className={className}>
						<Link to={link[0]}>{link[1]}</Link>
					</li>
				})}
			</ul>
		</nav>
	}
}