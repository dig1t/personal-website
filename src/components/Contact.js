import React from 'react'
import Layout from './Layout'

import ContactContainer from '../containers/contact-form'
import SocialLinksContainer from '../containers/social-media'

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
					<SocialLinksContainer />
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