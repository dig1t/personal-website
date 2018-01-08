import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import PropTypes from 'prop-types'

import Routes from './Routes'

export default class Root extends React.Component {
	render() {
		return <Routes />
	}
}