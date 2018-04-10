import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Footer from './Footer'

const aboutMe = `Lorem ipsum dolor sit amet,
consectetuer adipiscing elit, sed diam nonummy nibh euismod
tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam,`

const featuredProjects = [
	{
		img: 'https://picsum.photos/700/500',
		name: 'featured proj',
		id: 3643
	},
	{
		img: 'https://picsum.photos/500/500',
		name: 'project',
		id: 325643
	},
	{
		img: 'https://picsum.photos/400/500',
		name: 'featured project',
		id: 3634643
	}
]

export class Landing extends React.Component {
	renderComponent() {
		return <React.Fragment>
			<div className="background" />
			<div className="grid">
				<div className="column" />
				<div className="column" />
				<div className="column" />
				<div className="column" />
				<div className="column" />
				<div className="column" />
				<div className="column" />
			</div>
			<section className="hero">
				<div className="wrap">
					<div className="stripe col-offset-8" />
					<div className="row-ng align-wrap">
						<div className="col-4-ng col-offset-2 name">
							<div className="wrap">
								<svg className="shape" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" style={{'enable-background': 'new 0 0 600 600'}}>
									<polygon points="125.4,79.9 524,171 546.6,521.5 53,483 "/>
								</svg>
								<div className="page">01</div>
								<h1>
									<div>Javier</div>
									<div>Mejia</div>
								</h1>
								<div className="title">
									<div>Web Developer</div>
									<div>UI Designer</div>
								</div>
							</div>
						</div>
						<div className="col-3-ng col-offset-3 nav-btn">
							<Link to="/portfolio">View Portfolio</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="row-ng about">
				<div className="col-10-ng col-offset-1 wrap">
					<h1 className="heading--serif">About Me</h1>
					<div className="number">
						<span>02</span>
					</div>
					<p>{aboutMe}</p>
				</div>
			</section>
			<section className="row-ng featured">
				<div className="col-8-ng col-offset-1">
					<h1 className="heading heading--serif">Portfolio</h1>
				</div>
				<div className="col col-2-ng number heading">03</div>
				<div className="col-10-ng col-offset-1">
					<div className="list">{featuredProjects.map(project => (
						<div key={project.id} className="project">
							<img src={project.img} />
							<div className="name">{project.name}</div>
						</div>
					))}</div>
				</div>
				<div className="col-12-ng">
					<Link to="/portfolio">View More</Link>
				</div>
			</section>
			<Footer />
		</React.Fragment>
	}
	
	render() {
		return <Layout className="landing" page={this.props.location.pathname}>{this.renderComponent()}</Layout>
	}
}