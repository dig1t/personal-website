import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Burger from './UI'

export default class Landing extends React.Component {
	renderComponent() {
		return <section className="landing">
			<div className="background hero" />
			<div className="background overlay" />
			<div className="background broken-pattern" />
			<div className="row align-wrap">
				<div className="col-5 col-offset-1 name">
					<h1>
						<div>Javier</div>
						<div>Mejia</div>
					</h1>
					<div className="title">
						<div>Web Developer</div>
						<div>Graphic Designer</div>
					</div>
				</div>
				<div className="col-2 col-offset-4">
					<Link to="/portfolio" className="nav-btn">
						<span>View Portfolio</span>
					</Link>
				</div>
			</div>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}