import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Burger from './UI'

export default class Landing extends React.Component {
	renderComponent() {
		return <React.Fragment>
			<section className="landing">
				<div className="stripes" />
				<div className="row align-wrap">
					<div className="col-6 name">
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
						<Link to="/portfolio" className="nav-btn">View Portfolio</Link>
					</div>
				</div>
			</section>
			<div className="background">
				<div className="hero" />
				<div className="overlay" />
				<div className="broken-pattern" />
			</div>
		</React.Fragment>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}