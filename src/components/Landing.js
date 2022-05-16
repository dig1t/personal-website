import socials from '../constants/socials'

const creations = [
	{
		name: 'Murder Escape',
		client: 'firebit',
		medium: 'Roblox',
		thumbnail: '/i/projects/me-thumb.gif',
		url: 'https://roblox.com/games/90267357'
	},
	{
		name: 'Survival Islands',
		client: 'firebit',
		medium: 'Roblox',
		thumbnail: '/i/projects/si-thumb.png',
		url: 'https://roblox.com/games/4771858173'
	},
	{
		name: 'Zombie Task Force',
		client: 'ROWGNationStudios',
		medium: 'Roblox',
		thumbnail: '/i/projects/ztf-thumb.gif',
		url: 'https://roblox.com/games/4693424588'
	}
]

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
			{[...Array(11)].map((_, i) => {
				return <div key={i} className="col-1"></div>
			})}
		</div>
		
		<section className="hero">
			<div className="align-center-wrap2 grid">
				<div className = "copy col-1 offset-1 col-phone-8 offset-phone-2 offset-desktop-2">
					<h1>Javier Mejia</h1>
					<h5>UI/UX Developer</h5>
				</div>
				
				<div className="cta col-4 col-phone-8 offset-phone-2 offset-1 offset-phone-3 col-tablet-3 col-desktop-2 offset-desktop-2">
					<button className="cta-btn"><a href="#work">View Work</a></button>
				</div>
				
				<div className="graphic col-7 col-phone-12 col-tablet-6 offset-tablet-1 offset-r-tablet-1 col-desktop-5 offset-desktop-1 offset-r-desktop-2 h-100p">
					<i className="box img" style={heroImg}></i>
				</div>
			</div>
		</section>
		
		<section className="creations" id="work">
			<div className="header grid">
				<div className="graphic col-8 offset-4 col-desktop-9 offset-desktop-3">
					<i className="box img" style={helixImg}></i>
				</div>
				
				<div className="heading col-10 offset-2">
					<h1>Creations</h1>
				</div>
			</div>
			<div className="list">
				{creations.map((creation, i) => {
					const thumbnail = {
						backgroundImage: `url(${creation.thumbnail})`
					}
					
					return <div className="project grid" key={creation.name}>
						<div className="project-id col-1 offset-2 col-phone-2 offset-phone-1"><div>{'0' + (i + 1)}</div></div>
						<div className="name col-7 offset-r-2 col-phone-8 offset-phone-0 offset-r-phone-1">
							<a href={creation.url} target="_blank" rel="noopener noreferrer">{creation.name}</a>
						</div>
						<div className="project-medium col-7 offset-3 offset-r-2 col-phone-8 offset-phone-3 offset-r-phone-1"><h5>{creation.medium}</h5></div>
						<div className="thumbnail col-8 offset-2 col-phone-10 offset-phone-1 col-laptop-6">
							<i className="img" style={thumbnail}></i>
						</div>
						{/*<div className="nav-btn col-1 offset-9">
							<a href={creation.url} target="_blank" rel="noopener noreferrer">
								<i className="fas fa-chevron-right fa-3x"></i>
							</a>
						</div>*/}
					</div>
				})}
			</div>
		</section>
		
		<section className="socials">
			<div className="grid">
				<div className="col-10 offset-2 offset-phone-1">
					<h1>Follow Me</h1>
				</div>
				
				<div className="col-9 offset-3 offset-phone-2 links">
					{Object.keys(socials).map((name, i) => {
						return <a
							className={`fab fa-${name} fa-3x`}
							href={socials[name]}
							key={i}
							target="_blank"
							rel="noopener noreferrer"
						></a>
					})}
				</div>
			</div>
			<div className="grid graphic">
				<div className="col-7 offset-4 col-phone-7 col-tablet-6 offset-tablet-4 col-desktop-6 offset-desktop-4">
					<i className="box img " style={cityImg}></i>
				</div>
			</div>
		</section>
	</main>
}

export default Landing