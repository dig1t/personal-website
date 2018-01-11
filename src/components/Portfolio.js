import React from 'react'
import Layout from './Layout'
import { Modal } from './UI'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ListContainer from '../containers/portfolio-list.js'
import FilterContainer from '../containers/portfolio-filters.js'

class Portfolio extends React.Component {
	renderComponent() {
		return <section className="portfolio">
			<div className="wrap">
				<div className="heading row">
					<div className="col-6">
						<h1>Portfolio</h1>
						<p>Here is a list of projects I have worked on.</p>
					</div>
					<div className="col-6">
						<div className="page">02</div>
					</div>
				</div>
				
				<FilterContainer />
				
				<ListContainer />
			</div>
		</section>
	}
	
	render() {
		return <Layout page={this.props.location.pathname}>{this.renderComponent()}</Layout>
	}
}

export default connect()(Portfolio)