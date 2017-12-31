import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'

class Burger extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  
  toggle() {
    this.setState({open: !this.state.open})
  }
  
	render() {
    return <ui className={"nav-toggle hamburger " + (this.state.open ? 'active' : '')} onClick={this.toggle}><i /></ui>;
  }
}

class Modal extends React.Component {
  static defaultProps = {
    open: false,
    title: ''
  }
  
	constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  
  componentWillReceiveProps(newProps) {
    this.setState({open: newProps.open})
  }
  
  modalComponent() {
    return !this.state.open ? null : (<div className="modal">
      <div className="align">
        <div className="background-close" onClick={this.props.toggleModal} />
        <div className="container">
          <button className="close fa fa-close" onClick={this.props.toggleModal} />
          <div className="main">
            <div className="header">{this.props.title}</div>
            <div className="content">{this.props.children}</div>
          </div>
        </div>
      </div>
    </div>)
  }
  
  render() {
    // prevent errors when server-side rendering by returning null
    if (typeof window === 'undefined') return null
    
    return ReactDOM.createPortal(
      this.modalComponent(),
      document.getElementById('modal-root')
    )
  }
}

export {
  Burger,
  Modal
}