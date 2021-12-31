import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/* Made for Google Maps Places Autocomplete API */
class AddressAutocomplete extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			value: '',
			address: '',
			suggestions: [],
			suggestionIndex: 0,
			loading: true
		}
		
		// Chicago coordinates
		this.city = {
			center: {
				lat: 41.8781,
				lng: -87.6298
			},
			sw: {
				lat: 41.79,
				lng: -87.821245
			},
			ne: {
				lat: 42.011335,
				lng: -87.58
			}
		}
		this.minInputLength = 3
	}
	
	componentDidMount() {
		window.google ? this.init() : window.mapsCallback = this.init
	}
	
	componentDidMount() {
		
	}
	
	/*
	var _setBoundsFromLatLng = function (autocomplete, latLng) {
			var circle = new google.maps.Circle({
					radius: 40233.6, // 25 mi radius
					center: latLng
			});
			autocomplete.setBounds(circle.getBounds());
	}
	*/
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.state.value) {
			/*this.setState({ input: nextProps.value }, () => {
				this.suggest()
			})*/
		}
	}
	
	init = () => {
		const google = this.google = window.google
		
		const sw = new google.maps.LatLng(this.city.sw.lat, this.city.sw.lng)
		const ne = new google.maps.LatLng(this.city.ne.lat, this.city.ne.lng)
		
		this.autocomplete = new window.google.maps.places.AutocompleteService()
		this.geocoder = new window.google.maps.Geocoder()
		this.searchOptions = {
			bounds: new google.maps.LatLngBounds(sw, ne),
			componentRestrictions: {country: 'us'},
			types: ['address']
		}
	}
	
	formatPlaceDetails(place) {
		let details = {}
		
		place[0].address_components.map(component => {
			if (component.types && component.types[0]) switch(component.types[0]) {
				case 'street_number':
					details.streetNumber = component.long_name
					break
				case 'route':
					details.streetName = component.short_name
					break
				case 'neighborhood':
					details.neighborhood = component.long_name
					break
				case 'locality':
					details.city = component.long_name
					break
				case 'administrative_area_level_2':
					details.county = component.long_name
					break
				case 'administrative_area_level_1':
					details.state = component.long_name
					break
				case 'country':
					details.country = component.long_name
					break
				case 'postal_code':
					details.postalCode = component.long_name
					break
			}
		})
		
		return {
			...details,
			address: details.streetNumber && details.streetName ? details.streetNumber + ' ' + details.streetName : null,
			placeId: place.place_id
		}
	}
	
	highlight(text, toSelect) {
		// Escape keywords, Split keywords by spaces, Only use keywords with 2+ characters
		const keywords = toSelect.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').split(' ').filter(word => word.length > 1)
		const expression = new RegExp('(\\w*(?:' + keywords.join('|') + ')\\w*)', 'gi')
		
		return keywords.length > 0 ? text.split(expression).map((data, i) => {
			return !(i % 2) == 0 ? <b key={i}>{data}</b> : data
		}) : text
	}
	
	suggest() {
		if (this.props.value.length < this.minInputLength) return
		console.log(this, this.autocomplete);
		this.autocomplete.getPlacePredictions({
			...this.searchOptions,
			input: this.props.value
		}, (predictions, status) => {
			if (status !== this.google.maps.places.PlacesServiceStatus.OK) return
			console.log(predictions);
			this.setState({
				suggestions: predictions,
				selected: 0
			})
		})
	}
	
	clear() {
		this.setState({ suggestions: [] })
	}
	
	handleKeyDown = event => {
		// TODO: enter > choose selection
		// TODO: esc > clear suggestions
		
		console.log('keydown event');
		
		if (this.state.suggestiosn.length > 0) {
			let nextSelection
			
			if (back) {
				// Move back
				nextSelection = this.state.suggestionIndex <= 0 ? this.state.suggestions.length - 1 : this.state.suggestionIndex - 1
			} else {
				// Move forward
				nextSelection = this.state.suggestionIndex + 1 >= this.state.suggestions.length ? 0 : this.state.suggestionIndex + 1
			}
			
			this.setState({ suggestionIndex: nextSelection })
		}
	}
	
	handleBlur = event => {
		// clear suggestions
	}
	
	handlePlaceSelect = place => {
		this.clear()
		
		this.geocoder.geocode({ placeId: place.placeId }, (data, status) => {
			if (status !== this.google.maps.GeocoderStatus.OK) return
			
			const details = this.formatPlaceDetails(data)
			
			this.props.onChange(details)
			this.setState({ value: details.address })
		})
	}
	
	handleChange = event => {
		this.props.onChange(event.target.value, true)
		this.setState({ value: event.target.value }, () => {
			this.suggest()
		})
	}
	
	render() {
		const className = classNames('input input-address', this.state.suggestions.length > 0 && 'address-suggestions--show')
		
		return <div className={className}>
			<input {...this.props.inputProps}
			onChange={this.handleChange}
			value={this.props.value} />
			{this.state.suggestions.length > 0 && (
				<div className="address-suggestions">
					<div className="head">
						<h4>Suggestions</h4>
					</div>
					<ul role="listbox">
						{this.state.suggestions.map((place, i) => {
							const className = classNames(i === this.state.suggestionIndex && 'selected')
							
							return <li
								className={className}
								onClick={this.handlePlaceSelect.bind(this, {
									description: place.description,
									placeId: place.place_id
								})}
								id={i}
								role="option"
								key={place.id}
							>{this.highlight(place.description, this.props.value)}</li>
						})}
					</ul>
				</div>
			)}
		</div>
	}
}

AddressAutocomplete.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	return {
		googleReady: state.ui.googleReady
	}
}

export default connect(mapStateToProps)(AddressAutocomplete)