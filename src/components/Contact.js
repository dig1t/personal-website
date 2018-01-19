import React from 'react'
import Layout from './Layout'

import ContactContainer from '../containers/contact-form'

const links = [
	{
		service: 'github',
		url: 'https://github.com/Dig1t'
	},
	{
		service: 'twitter',
		url: 'https://twitter.com/_dig1t'
	},
	{
		service: 'instagram',
		url: 'https://instagram.com/_dig1t'
	}
]

export class Contact extends React.Component {
	renderComponent() {
		return <section className="contact">
			<div className="row-ng align-wrap">
				<div className="col-6-ng">
					<ContactContainer />
					<ul className="links">
						{links.map((link) => {
							return <li key={link.service}>
								<a className={"fab fa-" + link.service} href={link.url} target="_blank" data-service={link.service}></a>
							</li>
						})}
					</ul>
				</div>
				<div className="col-6-ng image">
					<i />
				</div>
			</div>
		</section>
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>
	}
}