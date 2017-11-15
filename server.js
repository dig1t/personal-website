const express = require('express')
const compression = require('compression')
const path = require('path')
const config = require('./config.json')

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, match, RouterContext } from 'react-router'
import Error from './src/components/Error'
import Routes from './src/components/Routes'

const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(compression())

app.get('*', (req, res) => {
	res.setHeader('Content-Type', 'text/html; charset=utf-8')
	res.setHeader('Cache-Control', 'no-cache')
	
	let context = {}
	
	const markup = ReactDOMServer.renderToString(
		<StaticRouter location={req.url} context={context}>
			<Routes />
		</StaticRouter>
	)
	
	return res.render('template', { title: config.name, meta: config.seo, markup })
})

app.post('/api/contact', (req, res) => {
	
})

app.listen(config.port, err => {
	if (err) console.log(err)
	
	console.log('Server started on 127.0.0.1:' + config.port)
})