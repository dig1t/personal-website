import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Burger from './UI'

export default class Landing extends React.Component {
	component() {
		return <section className="landing">
			<div className="background">
				<div className="hero" />
				<div className="overlay" />
				<div className="broken-pattern" />
			</div>
			<div className="stripes">
				<div className="tr" />
				<div className="bl" />
			</div>
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
				<div className="col-6 nav-btn">
					<Link to="/portfolio">View Portfolio</Link>
				</div>
			</div>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.component()}</Layout>;
	}
}