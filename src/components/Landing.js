import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

export default class Landing extends React.Component {
	toggleNav() {
		console.log(123)
	}
	
	renderComponent() {
		return <div className="box landing">
			<div className="overlay" />
			<div className="container">
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
				<i className="nav-toggle hamburger" onClick={this.toggleNav} />
				<div className="name">
					<h1>Javier Mejia</h1>
					<div className="wrap">
						<div className="line" />
					</div>
					<div className="title">Web Developer</div>
					<div className="title">Graphic Designer</div>
				</div>
				<div className="row">
					<div className="col-2">
						<Link to="/gallery">Gallery</Link>
						<span className="chevron-right"></span>
					</div>
				</div>
			</div>
		</div>;
	}
	
	render() {
		return <Layout>{this.renderComponent()}</Layout>;
	}
}