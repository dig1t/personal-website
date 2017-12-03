import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Burger from './UI'

export default class Landing extends React.Component {
	renderComponent() {
		return <>
			<section className="landing">
				<div className="row align-wrap">
					<div className="col-10 name">
						<h1>
							<div>Javier</div>
							<div>Mejia</div>
						</h1>
						<div className="title">
							<div>Web Developer</div>
							<div>Graphic Designer</div>
						</div>
					</div>
					<div className="col-2">
						<Link to="/portfolio" className="nav-btn">View Portfolio</Link>
					</div>
				</div>
			</section>
			<div className="background">
				<div className="hero" />
				<div className="overlay" />
				<div className="broken-pattern" />
			</div>
		</>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}