//import Image from 'next/image'
import Link from 'next/link'

function Landing() {
	const heroImg = {
		'backgroundImage': 'url(/i/landing/hero.jpg)'
	}
	
	const helixImg = {
		'backgroundImage': 'url(/i/landing/helix.jpg)'
	}
	
	const cityImg = {
		'backgroundImage': 'url(/i/landing/city-overview.jpg)'
	}
	
	return <main className="landing">
		<div className="grid-effect grid">
			{[...Array(11)].map(() => {
				return <div className="col-1"></div>
			})}
		</div>
		<section className="hero">
			<div className="align-wrap2 grid">
				<div className = "copy col-1 offset-1 col-phone-8 offset-phone-2 offset-desktop-2">
					<h1>Javier Mejia</h1>
					<h5 className="font-weight-normal"><i>UI/UX Developer</i></h5>
				</div>
				<div className="cta col-4 col-phone-8 offset-phone-2 offset-1 offset-phone-3 col-tablet-3 col-desktop-2 offset-desktop-2">
					<button className="cta-btn">View Work</button>
				</div>
				<div className="graphic col-7 col-phone-12 col-tablet-6 offset-tablet-1 offset-r-tablet-1 col-desktop-5 offset-desktop-1 offset-r-desktop-2 h-100p">
					<i className="box img" style={heroImg}></i>
				</div>
			</div>
		</section>
		<section className="creations">
			<div className="header grid">
				<div className="graphic col-8 offset-4 col-desktop-9 offset-desktop-3">
					<i className="box img" style={helixImg}></i>
				</div>
				<div className="heading col-10 offset-2">
					<h1>Creations</h1>
				</div>
			</div>
			<ol>
				<li>
					
				</li>
			</ol>
		</section>
		<section className="socials">
			<h1>Follow Me</h1>
		</section>
	</main>
}

export default Landing