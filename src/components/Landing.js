import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

export default class Landing extends React.Component {
	renderComponent() {
		return <div className="box landing">
			<div className="overlay" />
			<div className="row main">
				<div className="col-9 col-offset-1">
					<h1>Javier Mejia</h1>
					<div className="line" />
					<p className="title">Web Developer / Designer</p>
				</div>
				<div className="col-2">
					<Link to="/gallery">Gallery</Link>
					<span className="chevron-right"></span>
				</div>
			</div>
		</div>;
	}
	
	render() {
		return <Layout>{this.renderComponent()}</Layout>;
	}
}