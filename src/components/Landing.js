import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Burger from './UI'

export default class Landing extends React.Component {
	renderComponent() {
		return <section className="landing">
			<div className="background">
				<div className="i pattern" />
				<div className="i shape-1" />
				<div className="i shape-2" />
				<div className="i shape-3" />
				<div className="border">
					<div className="i cross t l" />
					<div className="i cross t r" />
					<div className="i cross b l" />
					<div className="i cross b r" />
					<div className="i overlapped-shape" />
				</div>
				<div className="i shape-4" />
			</div>
			<div className="align-wrap">
				<div className="name">
					<h1>Javier Mejia</h1>
					<div className="wrap">
						<div className="line" />
					</div>
					<div className="title">Web Developer</div>
					<div className="title">Graphic Designer</div>
				</div>
				<div className="nav-btn">
					<Link to="/portfolio">Portfolio</Link>
					<span className="fa fa-chevron-right"></span>
				</div>
			</div>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}