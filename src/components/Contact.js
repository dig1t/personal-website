import React from 'react'
import Layout from './Layout'

export default class Contact extends React.Component {
	renderComponent() {
		return <section className="contact">
			<div className="row">
				<div className="col-6 col-offset-3 align-wrap">
					<div className="row">
						<div className="heading col-12">
							<h2>Get in contact with me</h2>
						</div>
						<div className="col-6">
							<input placeholder="Name" name="name" />
						</div>
						<div className="col-6">
							<input placeholder="Email" name="email" />
						</div>
						<div className="col-12">
							<input placeholder="Subject" name="subject" />
						</div>
						<div className="col-12">
							<textarea placeholder="Message" name="message" />
						</div>
						<div className="col-3">
							<button>SEND</button>
						</div>
					</div>
				</div>
			</div>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}