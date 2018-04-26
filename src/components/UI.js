import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import PropTypes from 'prop-types'
import classNames from 'classnames'

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
	constructor(props) {
		super(props)
		this.state = props
	}
	
	componentWillReceiveProps(newProps) {
		this.setState({open: newProps.open})
	}
	
	getHeader() {
		let show = false
		
		return show ? (<div className="header">{this.props.title}</div>) : null
	}
	
	getFooter() {
		let show = false
		
		switch(this.props.type) {
			case 'image': {
				show = true
				break
			}
		}
		
		return show ? (<div className="footer">
			<div className="heading">{this.props.title}</div>
			<p>{this.props.description}</p>
		</div>) : null
	}
	
	modalComponent() {
		let content = this.props.children
		
		switch(this.props.type) {
			case 'image': {
				content = <img src={this.props.image} alt={this.props.imgAlt} />
				break
			}
		}
		
		const className = classNames('modal', this.props.type)
		
		return !this.state.open ? null : (<div className={className}>
			<div className="background-close" onClick={this.props.toggleModal} />
			<button className="close fas fa-times" onClick={this.props.toggleModal} />
			<div className="align">
				<div className="container">
					<div className="main">
						{ this.getHeader() }
						<div className="content">{content}</div>
						{ this.getFooter() }
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

Modal.defaultProps = {
	open: false
}

Modal.propTypes = {
	open: PropTypes.bool.isRequired
}

// TODO: scrollbar
// TODO: 100 / (400/100)
// TODO: div_height / (div_total_height/div_height)
// TODO: calc scrollbar track height

class ScrollContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = props
	}
	
	handleScroll() {
		console.log('scroll')
	}
	
	handleReceive(e) {
		console.log(e.data, e.func)
	}
	
	componentDidMount() {
		console.log('mounting')
		window.addEventListener('message', this.handleReceive, false)
		//this.container.addEventListener('scroll', this.handleScroll.bind(this))
	}
	
	componentWillUnmount() {
		//this.container.removeEventListener('scroll', this.handleScroll)
	}
	
	render() {
		return <div className={this.props.className} ref={(ref) => this.container = ref}>
			<div className="scroll__view" onScroll={this.handleScroll.bind(this)} ref={(ref) => this.content = ref}>
				<div className="scroll__content">
					{ this.props.children }
				</div>
			</div>
			<div className="scroll__track" ref={(ref) => this.track = ref}>
				<div className="scroll__slider" ref={(ref) => this.slider = ref} />
			</div>
		</div>
	}
}

export {
	Burger,
	Modal,
	ScrollContainer
}