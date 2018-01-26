import React from 'react'

const links = [
	{
		service: 'github',
		url: 'https://github.com/Dig1t'
	},
	{
		service: 'twitter',
		url: 'https://twitter.com/_dig1t'
	},
	{
		service: 'instagram',
		url: 'https://instagram.com/_dig1t'
	}
]

const SocialLinksContainer = () => (
	<ul className="links">
		{links.map(link => (
			<li key={link.service}>
				<a className={"fab fa-" + link.service} target="_blank" href={link.url}></a>
			</li>
		))}
	</ul>
)

export default SocialLinksContainer