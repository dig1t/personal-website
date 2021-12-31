//import Image from 'next/image'
import Link from 'next/link'

function Landing() {
	const backgroundClass = {
		'background-image': 'url(/i/landing/bkg.png)'
	}
	
	return <>
		<div className="landing" style={backgroundClass}>
			<div className="box align-wrap grid">
				<div className = "gi-6">
					asdsad
				</div>
				<div className="gi-4 grid-push-r-2">
					<div>
						<h2>app</h2>
						<p>desc</p>
						<Link href="/auth/signup">Sign Up</Link>
						<Link href="/auth/login">Login</Link>
					</div>
				</div>
			</div>
		</div>
	</>
}

export default Landing