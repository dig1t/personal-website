import React from 'react'
import { Modal } from '../components/UI'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import axios from 'axios'

class Input extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			type: this.props.type,
			value: this.props.value,
			
			minLength: parseInt(this.props.minLength),
			maxLength: parseInt(this.props.maxLength),
			validateFor: 'text',
			errorText: ''
		}
		
		this.validate = this.validate.bind(this)
	}
	
	validate = (value) => {
		let valid = true
		
		if (value.length >= (this.props.minLength || 0)
		&& value.length <= (this.props.maxLength || -Math.max())
		&& value !== '') {
			let text
			
			switch (this.props.validateFor) {
				case 'email': {
					// very basic, validate by sending email confirmation
					valid = /.+\@.+\..+/.test(value)
					text = `Not a valid email address`
					break
				}
				
				case 'name': {
					valid = /^[a-zA-Z0-9][a-zA-Z0-9._\-]*$/.test(value)
					text = `${this.props.inputName} is not a valid name`
					break
				}
			}
			
			this.setState({ errorText: text || `${this.props.inputName} is invalid` })
		} else {
			valid = false
			if (value.length !== 0 && value.length <= (this.props.minLength - 1 || 0)) this.setState({
				errorText: `${this.props.inputName} is too short (${this.props.minLength} characters)`
			})
			
			if (value.length === 0) this.setState({ errorText: `${this.props.inputName} is missing` })
			
			if (this.props.maxLength && value.length >= (this.props.maxLength + 1 || 0)) this.setState({
				errorText: `${this.props.inputName} is too long (${this.props.maxLength} characters)`
			})
		}
		
		// if not valid then toggle error
		if (this.props.isValid !== valid) this.props.toggleIsValid(this.props.name, valid)
	}
	
	handleKeyDown = event => {
		let val = this.props.value
		const keyPressed = String.fromCharCode(event.which)
		
		// set as empty string if pressed backspace with 1 character in value
		if (event.keyCode === 8) {
			val = val.slice(0, -1)
		} else if (!event.ctrlKey && !event.altKey) {
			if (keyPressed.length === 1) val += keyPressed
		}
		
		this.validate(val)
	}
	
	handleKeyUp = event => {
		if ((event.ctrlKey && event.keyCode === 86) || event.keyCode === 8) this.validate(this.props.value)
	}
	
	componentWillReceiveProps(nextProps) {
		if (this.props.name === nextProps.name && this.state.value !== nextProps.value) this.setState({ value: nextProps.value })
	}
	
	el() {
		const attributes = {
			placeholder: this.props.placeholder,
			name: this.props.name,
			onChange: this.props.onChange,
			minLength: this.props.minLength !== 0 ? this.props.minLength : null,
			maxLength: this.props.maxLength,
		}
		
		return this.state.type === 'textarea' ? (
			<textarea {...attributes}
				onBlur={() => this.validate(this.props.value)} onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} />
		) : (
			<input type={this.state.type} {...attributes}
				onBlur={() => this.validate(this.props.value)} onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} />
		)
	}
	
	render() {
		const className = classNames('input', 'input-' + this.props.type, {
			error: this.props.isValid === false
		})
		
		return <div className={className}>
			{this.el()}
			{this.props.isValid === false ? (
				<div>{this.state.errorText}</div>
			) : null}
		</div>
	}
}

Input.defaultProps = {
	minLength: '0',
	type: 'text',
	validateFor: 'text',
	value: null
}

Input.propTypes = {
	minLength: PropTypes.string,
	type: PropTypes.string,
	validateFor: PropTypes.string,
	value: PropTypes.string.isRequired
}

class ContactContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				_subject: '',
				name: '',
				email: '',
				message: ''
			},
			isValid: {
				_subject: null,
				name: null,
				email: null,
				message: null
			},
			
			okToPost: false,
			formSubmitted: false
		}
		
		this.handleInputChange = this.handleInputChange.bind(this)
		//this.toggleError = this.toggleError.bind(this)
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
	
	toggleIsValid = (name, value) => {
		this.setState({
			isValid: {
				...this.state.isValid,
				[name]: value
			}
		}, () => {
			let okToPost = true
			
			for (let val in this.state.isValid) {
				if (this.state.isValid[val] !== true) {
					okToPost = false
					break
				}
			}
			
			this.setState({ okToPost: okToPost })
		})
	}
	
	handleSubmit(event) {
		event.preventDefault()
		
		if (this.state.okToPost) axios.post('https://formspree.io/contact@javierm.net', this.state.form, {
				headers: {'Content-Type': 'application/json'}
			})
			.then(() => this.setState({ formSubmitted: true }))
			.catch((error) => {
				console.error(error)
			});
	}
	
	render() {
		return <form onSubmit={this.handleSubmit.bind(this)}>
			{this.state.formSubmitted ? (
				<Redirect to="/thanks" push />
			) : null}
			<input type="text" name="_gotcha" style={{display: 'none'}} />
				<div className="col-8-ng col-offset-2 row">
					<div className="heading col-12-ng">
						<h2>CONTACT ME</h2>
					</div>
					<div className="col-12-ng">
						<Input type="text" name="name" placeholder="Name" value={this.state.form.name}
							inputName="Name"
							toggleIsValid={this.toggleIsValid}
							isValid={this.state.isValid.name}
							validateFor="name"
							minLength="2"
							onChange={this.handleInputChange} />
					</div>
					<div className="col-12-ng">
						<Input type="email" name="email" placeholder="Email" value={this.state.form.email}
							inputName="Email"
							toggleIsValid={this.toggleIsValid}
							isValid={this.state.isValid.email}
							validateFor="email"
							onChange={this.handleInputChange} />
					</div>
					<div className="col-12-ng">
						<Input type="text" name="_subject" placeholder="Subject" value={this.state.form._subject}
							inputName="Subject"
							toggleIsValid={this.toggleIsValid}
							isValid={this.state.isValid._subject}
							validateFor="text"
							minLength="1"
							onChange={this.handleInputChange} />
					</div>
					<div className="col-12-ng">
						<Input type="textarea" name="message" placeholder="Message" value={this.state.form.message}
							inputName="Message"
							toggleIsValid={this.toggleIsValid}
							isValid={this.state.isValid.message}
							minLength="1"
							maxLength="99999"
							onChange={this.handleInputChange} />
					</div>
					<div className="col-12-ng">
						<button type="submit" disabled={!this.state.okToPost}>SEND</button>
					</div>
				</div>
			</form>
	}
}

const mapStateToProps = state => {
	return {
		list: state.listFilters.list,
		modalTargetId: state.portfolio.modalTargetId,
		modalOpen: state.portfolio.modalOpen
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({click, closeModal}, dispatch)
}

export default connect()(ContactContainer)