import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Burger from './UI'

export default class Landing extends React.Component {
	renderComponent() {
		return <section className="landing">
			<div className="background" />
			<div className="overlay" />
			<div className="row align-wrap">
				<div className="col-5 col-offset-1 name">
					<h1>Javier Mejia</h1>
					<div className="wrap">
						<div className="line" />
					</div>
					<div className="title one">Web Developer</div>
					<div className="title two">Graphic Designer</div>
				</div>
				<div className="col-5">
					<div className="nav-btn">
						<Link to="/portfolio">View my Portfolio</Link>
						<span className="fa fa-chevron-right"></span>
					</div>
				</div>
			</div>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}