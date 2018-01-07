import React from 'react'
import { Router, Route, Switch } from 'react-router'

import { Landing } from './Landing'
import { Portfolio } from './Portfolio'
import { Store } from './Store'
import { Gallery } from './Gallery'
import { Contact } from './Contact'
import { Error } from './Error'

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route exact path="/portfolio" component={Portfolio} />
		<Route exact path="/store" component={Store} />
		<Route exact path="/gallery" component={Gallery} />
		<Route exact path="/contact" component={Contact} />
		<Route component={Error} />
	</Switch>
)

export default Routes