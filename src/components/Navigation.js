//import Image from 'next/image'
import Link from 'next/link'

function Navigation() {
	const backgroundClass = {
		'background-image': 'url(/i/logo.svg)'
	}
	
	return <nav className="sticky">
		<div className="box align-wrap grid">
			<div className = "col-5 offset-1">
				<i className="logo bg-center bg-contain bg-no-repeat display-block" style={backgroundClass}></i>
			</div>
			<div className="col-5 offset-r-1">
				<ul className="float-r">
					<li><h6>About</h6></li>
					<li><h6>Gallery</h6></li>
				</ul>
			</div>
		</div>
	</nav>
}

export default Navigation