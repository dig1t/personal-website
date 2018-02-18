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
			<section className="hero">
				<div className="background" />
				<div className="wrap">
					<div className="stripes">
						<div className="tr" />
						<div className="bl" />
					</div>
					<div className="row-ng align-wrap">
						<div className="col-6-ng name">
							<h1>
								<div>Javier</div>
								<div>Mejia</div>
							</h1>
							<div className="title">
								<div>Web Developer</div>
								<div>UI Designer</div>
							</div>
						</div>
						<div className="col-6-ng nav-btn">
							<Link to="/portfolio">View Portfolio</Link>
						</div>
					</div>
					<div className="page row-ng">
						<div className="col-12-ng">
							<span className="number--big">01</span>
							<span className="text">Welcome</span>
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