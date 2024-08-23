import socials from '../constants/socials';

const DEFAULT_PLATFORM_VISIT_TYPE = 'GAME PLAYS';

const clientLinks = {
  'Suit Up Games': 'https://suitup.games',
  'Looking Fresh Games': 'https://lookingfresh.games',
  firebit: 'https://www.roblox.com/groups/5113589',
};

const creations = [
  {
    name: "Blippi's Playground",
    client: 'Suit Up Games',
    platform: 'Roblox Branded Experience',
    platformVisits: 8000000,
    youtubeId: 'Co8SmlCUb5w',
    url: 'https://www.roblox.com/games/14834598561',
  },
  {
    name: 'Nerf Extraction',
    client: 'Suit Up Games',
    platform: 'Roblox Branded Experience',
    platformVisits: 2100000,
    youtubeId: 'p3JJecmfOEU',
    url: 'https://www.roblox.com/games/14357600982',
  },
  {
    name: 'Sparkles Magical Market',
    client: 'Looking Fresh Games',
    platform: 'Roblox Branded Experience',
    platformVisits: 20000,
    // thumbnail: '/i/projects/sparkles.jpeg',
    youtubeId: 'VBsmVjKf_Vc',
    url: 'https://www.roblox.com/games/15287717538',
  },
  {
    name: 'Murder Escape',
    client: 'firebit',
    platform: 'Roblox Original Experience',
    platformVisits: 2000000,
    thumbnail: '/i/projects/me-thumb.gif',
    url: 'https://roblox.com/games/90267357',
  },
  {
    name: 'Survival Islands',
    client: 'firebit',
    platform: 'Roblox Original Experience',
    platformVisits: 20000,
    thumbnail: '/i/projects/si-thumb.png',
    url: 'https://roblox.com/games/4771858173',
  },
  {
    name: 'Zombie Task Force',
    client: 'ROWG Nation Studio',
    platform: 'Roblox Original Experience',
    platformVisits: 5200000,
    thumbnail: '/i/projects/ztf-thumb.gif',
    url: 'https://roblox.com/games/4693424588',
  },
  {
    name: 'La Hora Machorra',
    client: 'La Hora Machorra',
    platform: 'Streaming Platform',
    thumbnail: '/i/projects/lhm-thumb.png',
    url: 'http://lahoramachorra.com',
  },
];

function formatNumber(num) {
  const format = (value, suffix) => {
    const formatted = value.toFixed(1);
    return formatted.endsWith('.0')
      ? formatted.slice(0, -2) + suffix
      : formatted + suffix;
  };

  if (num >= 1000000) {
    return format(num / 1000000, 'M');
  }

  if (num >= 1000) {
    return format(num / 1000, 'K');
  }

  return num.toString();
}

function Landing() {
  const heroImg = {
    backgroundImage: 'url(/i/landing/hero.jpg)',
  };

  const helixImg = {
    backgroundImage: 'url(/i/landing/helix.jpg)',
  };

  const cityImg = {
    backgroundImage: 'url(/i/landing/city-overview.jpg)',
  };

  return (
    <main className='landing'>
      <div className='grid-effect grid'>
        {[...Array(11)].map((_, i) => {
          return <div key={i} className='col-1'></div>;
        })}
      </div>

      <section className='hero'>
        <div className='align-center-wrap2 grid'>
          <div className='copy col-1 offset-1 col-phone-8 offset-phone-2 offset-desktop-2'>
            <h1>Javi Mejia</h1>
            <h5>Roblox Developer</h5>
            <h5>Software Developer</h5>
            <h5>Designer</h5>
          </div>

          <div className='cta col-4 col-phone-8 offset-phone-2 offset-1 offset-phone-3 col-tablet-3 col-desktop-2 offset-desktop-2'>
            <button className='cta-btn'>
              <a href='#work'>View Work</a>
            </button>
          </div>

          <div className='graphic col-7 col-phone-12 col-tablet-6 offset-tablet-1 offset-r-tablet-1 col-desktop-5 offset-desktop-1 offset-r-desktop-2 h-100p'>
            <i className='box img' style={heroImg}></i>
          </div>
        </div>
      </section>

      <section className='creations' id='work'>
        <div className='header grid'>
          <div className='graphic col-8 offset-4 col-desktop-9 offset-desktop-3'>
            <i className='box img' style={helixImg}></i>
          </div>

          <div className='heading col-10 offset-2'>
            <h1>Projects</h1>
            <div>Projects I&apos;ve worked on</div>
          </div>
        </div>
        <div className='list'>
          {creations.map((creation, i) => {
            const thumbnail = {
              backgroundImage: `url(${creation.thumbnail})`,
            };

            return (
              <div className='project grid' key={creation.name}>
                <div className='project-id col-1 offset-2 col-phone-2 offset-phone-1'>
                  <div>{'0' + (i + 1)}</div>
                </div>
                <div className='name col-7 offset-r-2 col-phone-8 offset-phone-0 offset-r-phone-1'>
                  <a
                    href={creation.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {creation.name}
                  </a>
                </div>
                <div className='project-info col-7 offset-3 offset-r-2 col-phone-8 offset-phone-3 offset-r-phone-1'>
                  <h5 className='client'>
                    {' '}
                    {clientLinks[creation.client] ? (
                      <a
                        href={clientLinks[creation.client]}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {creation.client}
                      </a>
                    ) : (
                      <span>{creation.client}</span>
                    )}
                  </h5>
                  <div className='platform'>
                    {creation.platform}
                    {creation.platformVisits && (
                      <span className='highlight'>
                        {formatNumber(creation.platformVisits)}+
                        <span className='highlight'>
                          {DEFAULT_PLATFORM_VISIT_TYPE}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
                <div className='thumbnail col-8 offset-2 col-phone-10 offset-phone-1 col-laptop-6'>
                  {creation.youtubeId && (
                    <div className='video'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={`https://www.youtube.com/embed/${creation.youtubeId}`}
                        title={creation.name}
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerpolicy='strict-origin-when-cross-origin'
                      ></iframe>
                    </div>
                  )}
                  {creation.thumbnail && (
                    <i className='img' style={thumbnail}></i>
                  )}
                </div>
                {/*<div className="nav-btn col-1 offset-9">
                  <a href={creation.url} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-chevron-right fa-3x"></i>
                  </a>
                </div>*/}
              </div>
            );
          })}
        </div>
      </section>

      <section className='socials'>
        <div className='grid'>
          <div className='col-10 offset-2 offset-phone-1'>
            <h1>Follow Me</h1>
          </div>

          <div className='col-9 offset-3 offset-phone-2 links'>
            {Object.keys(socials).map((name, i) => {
              return (
                <a
                  className={`fab fa-${name} fa-6x`}
                  href={socials[name]}
                  key={i}
                  target='_blank'
                  rel='noopener noreferrer'
                ></a>
              );
            })}
          </div>
        </div>
        <div className='grid graphic'>
          <div className='col-7 offset-4 col-phone-7 col-tablet-6 offset-tablet-4 col-desktop-6 offset-desktop-4'>
            <i className='box img ' style={cityImg}></i>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Landing;
