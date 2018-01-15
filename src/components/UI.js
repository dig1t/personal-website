import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import validator from 'react-validation'

class Burger extends React.Component {
	static propTypes = {
		open: PropTypes.element.bool
	}
	
	static state = {
  	open: false
  }
  
  toggle() {
    this.setState({open: !this.state.open})
  }
  
	render() {
    return <ui className={'nav-toggle hamburger ' + (this.state.open ? 'active' : '')} onClick={this.toggle}><i /></ui>
  }
}

class Modal extends React.Component {
  static defaultProps = {
    open: false,
    title: ''
  }
  
	constructor(props) {
    super(props)
    this.state = props
  }
  
  componentWillReceiveProps(newProps) {
    this.setState({open: newProps.open})
  }
  
  modalComponent() {
    let content = this.props.children
    
    switch(this.props.type) {
      case 'image':
        content = <img src={this.props.image} alt={this.props.imgAlt} />
        break
    }
    
    const className = classNames('modal', this.props.type)
    
    return !this.state.open ? null : (<div className={className}>
      <div className="align">
        <div className="background-close" onClick={this.props.toggleModal} />
        <div className="container">
          <button className="close fas fa-times" onClick={this.props.toggleModal} />
          <div className="main">
            <div className="header">{this.props.title}</div>
            <div className="content">{content}</div>
          </div>
        </div>
      </div>
    </div>)
  }
  
  render() {
    // prevent errors when server-side rendering by returning null
    return typeof window !== 'undefined' ? ReactDOM.createPortal(
      this.modalComponent(),
      document.getElementById('modal-root')
    ) : null
  }
}

class Input extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			attributes: {
				placeholder: this.props.placeholder,
				name: this.props.name,
				onChange: this.props.onChange
			},
			type: this.props.type,
			value: this.props.value,
			statusType: 'error',
			statusDisplay: false,
			statusMessage: ''
		}
		
		this.handleBlur = this.handleBlur.bind(this, validator)
	}
	
	handleBlur(event) {
		console.log(123, event)
		const target = event.target
		
		let pass = false
		
		switch (this.props.validateFor) {
			case 'email':
				pass = validator.isEmail(this.props.value)
		}
		
		if (!pass) {
			this.setState({
				statusDisplay: true
			})
		}
	}
	
	componentWillReceiveProps(nextProps) {
		if (this.props.value !== nextProps.value) this.setState({value: nextProps.value})
  }
	
	el() {
		return this.state.type === 'textarea' ? (
			<textarea {...this.state.attributes} onBlur={this.handleBlur} />
		) : (
			<input type={this.state.type} {...this.state.attributes} onBlur={this.handleBlur.bind(this)} />
		)
	}
	
	render() {
		return <div className={'input input-' + this.state.type}>
			{this.el()}
			{this.state.statusDisplay ? (
				<div className={this.state.statusType}>{this.state.statusMessage}</div>
			) : null}
		</div>
	}
}

export {
  Burger,
  Modal,
	Input
}