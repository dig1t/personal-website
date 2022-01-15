const swatch = color => {
	const colors = []
	
	const shadeClass = 'h-3 '
	
	const className500 = 'h-6 bg-' + color + '-500'
	const className50 = shadeClass + 'bg-' + color + '-50'
	
	colors.push(<div className={className500}>
			<h6 className="text-black-900 p-1">{color} <i className="float-r">50</i></h6>
	</div>)
	
	colors.push(<div className={className50}>
		<h6 className="text-black-900 p-1"><i className="float-r">50</i></h6>
	</div>)
	
	for (let i = 1; i < 5; i++) {
		const shade = i * 100
		const className = shadeClass + 'bg-' + color + '-' + shade
		
		colors.push(<div className={className}>
			<h6 className="text-black-900 p-1"><i className="float-r">{shade}</i></h6>
		</div>)
	}
	
	for (let i = 5; i < 10; i++) {
		const shade = i * 100
		const className = shadeClass + 'bg-' + color + '-' + shade
		
		colors.push(<div className={className}>
			<h6 className="text-white p-1"><i className="float-r">{shade}</i></h6>
		</div>)
	}
	
	return <div className="col-12 col-tablet-4 col-desktop-3">
		<h3>{colors}</h3>
	</div>
}

const Colors = () => {
	const swatches = ['black', 'light-gray', 'gray', 'dark-gray', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'].map(
		color => swatch(color)
	)
	
	return <main>
		<div className="grid">
			<div className="col-10 offset-1 offset-r-1 p-y-4">
				<h1 className="p-y-1">Color Palette</h1>
				<h6 className="font-weight-normal p-x-1">My personal color palette used across all of my sites.</h6>
			</div>
			{swatches}
		</div>
	</main>
}

export default Colors