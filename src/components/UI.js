import React from 'react'
import Navigation from './Navigation'

export default class Burger extends React.Component {
  constructor() {
    super()
    this.state = {
      navOpen: false
    }
  }
  
  toggle() {
    this.setState({navOpen: !this.state.navOpen})
  }
  
	render() {
    return <ui className={"nav-toggle hamburger " + (this.state.navOpen ? 'active' : '')} onClick={this.toggle}><i /></ui>;
  }
}