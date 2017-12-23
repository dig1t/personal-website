import React from 'react'
import Layout from './Layout'

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

export default class Contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
		
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	handleInputChange(event) {
		const target = event.target
		
		this.setState({
			[target.name]: target.type === 'checkbox' ? target.checked : target.value
		})
	}
	
	handleSubmit(event) {
		event.preventDefault()
		const data = new FormData(event.target)
		
		console.log(this.state)
	}
	
	renderComponent() {
		return <section className="contact">
			<div className="row-ng align-wrap">
				<div className="col-6-ng">
					<form onSubmit={this.handleSubmit}>
						<div className="col-8-ng col-offset-2 row">
							<div className="heading col-12-ng">
								<h2>CONTACT ME</h2>
							</div>
							<div className="col-12-ng">
								<input placeholder="Name" name="name" value={this.state.name} onChange={this.handleInputChange} />
							</div>
							<div className="col-12-ng">
								<input placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange} />
							</div>
							<div className="col-12-ng">
								<input placeholder="Subject" name="subject" value={this.state.subject} onChange={this.handleInputChange} />
							</div>
							<div className="col-12-ng">
								<textarea placeholder="Message" name="message" value={this.state.message} onChange={this.handleInputChange} />
							</div>
							<div className="col-12-ng">
								<button>SEND</button>
							</div>
						</div>
					</form>
					<ul className="links">
						{links.map((link) => {
							return <li key={link.service}>
								<a className={"fa fa-" + link.service} href={link.url} target="_blank" data-service={link.service}></a>
							</li>;
						})}
					</ul>
				</div>
				<div className="col-6-ng image">
					<i />
				</div>
			</div>
		</section>;
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>;
	}
}