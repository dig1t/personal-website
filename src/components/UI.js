import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import classNames from 'classnames'

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
    return <ui className={'nav-toggle hamburger ' + (this.state.open ? 'active' : '')} onClick={this.toggle}><i /></ui>;
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

export {
  Burger,
  Modal
}