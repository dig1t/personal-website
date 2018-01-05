import axios from 'axios'
import React from 'react'
import Layout from './Layout'
import { Input } from './UI'

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
			form: {
				_subject: '',
				name: '',
				email: '',
				message: ''
			}
		}
		
		this.handleInputChange = this.handleInputChange.bind(this)
	}
	
	handleInputChange(event) {
		const target = event.target
		
		this.setState({
			form: {
				...this.state.form,
				[target.name]: target.type === 'checkbox' ? target.checked : target.value
			}
		})
	}
	
	handleSubmit(event) {
		event.preventDefault()
		const data = new FormData(event.target)
		
		console.log(this.state)
		
		axios.post('https://formspree.io/contact@javierm.net', this.state.form, {
				headers: {'Content-Type': 'application/json'}
			})
		  .then((response) => {
		    console.log('saved successfully', response)
		  })
			.catch((error) => {
				console.log(error)
			});
	}
	
	renderComponent() {
		return <section className="contact">
			<div className="row-ng align-wrap">
				<div className="col-6-ng">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<input type="text" name="_gotcha" style={{display: 'none'}} />
						<div className="col-8-ng col-offset-2 row">
							<div className="heading col-12-ng">
								<h2>CONTACT ME</h2>
							</div>
							<div className="col-12-ng">
								<Input name="name" placeholder="Name" value={this.state.form.name}
									validateFor="name"
									onBlur={this.handleBlur}
									onChange={this.handleInputChange} />
							</div>
							<div className="col-12-ng">
								<Input type="email" name="email" placeholder="Email" value={this.state.form.email}
									validateFor="email"
									onBlur={this.handleBlur}
									onChange={this.handleInputChange} />
							</div>
							<div className="col-12-ng">
								<Input name="_subject" placeholder="Subject" value={this.state.form._subject}
									validateFor="email"
									onBlur={this.handleBlur}
									onChange={this.handleInputChange} />
							</div>
							<div className="col-12-ng">
								<Input type="textarea" name="message" placeholder="Message" value={this.state.form.message}
									onBlur={this.handleBlur}
									onChange={this.handleInputChange} />
							</div>
							<div className="col-12-ng">
								<button type="submit">SEND</button>
							</div>
						</div>
					</form>
					<ul className="links">
						{links.map((link) => {
							return <li key={link.service}>
								<a className={"fab fa-" + link.service} href={link.url} target="_blank" data-service={link.service}></a>
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