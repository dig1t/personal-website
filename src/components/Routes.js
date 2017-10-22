import React from 'react'
import { Router, Route, Switch } from 'react-router'

import Landing from './Landing'
import Gallery from './Gallery'
import Contact from './Contact'
import Error from './Error'

export default class Routes extends React.Component {
	render() {
		return <Switch>
			<Route exact path="/" component={Landing} />
			<Route exact path="/gallery" component={Gallery} />
			<Route exact path="/contact" component={Contact} />
			<Route component={Error} />
		</Switch>;
	}
}