import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

export class Landing extends React.Component {
	renderComponent() {
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
			<div className="wrap">
				<div className="row align-wrap">
					<div className="col-6 name">
						<h1>
							<div>Javier</div>
							<div>Mejia</div>
						</h1>
						<div className="title">
							<div>Web Developer</div>
							<div>UI Designer</div>
						</div>
					</div>
					<div className="col-6 nav-btn">
						<Link to="/portfolio">View Portfolio</Link>
					</div>
				</div>
				<div className="page row">
					<div className="col-12">
						<span className="number">01</span>
						<span className="text">Welcome</span>
					</div>
				</div>
			</div>
		</section>
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>
	}
}