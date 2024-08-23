import React, { useEffect, useState } from 'react';

import socials from '../constants/socials';

const Card = () => {
  const avatar = {
    backgroundImage: 'url(/i/avatar.png)',
  };

  const handleShareClick = () => {
    navigator.share({
      url: 'http://dig1t.io/card',
    });
  };

  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(
      typeof navigator !== 'undefined' && typeof navigator.share === 'function',
    );
  }, []);

  return (
    <main className='card align-center-wrap'>
      <div className='grid p-1'>
        <div className='card-container col-10 offset-1 col-phone-12 offset-phone-0 col-tablet-8 offset-tablet-2'>
          <div className='grid'>
            <div className='col-5'>
              <i className='avatar img' style={avatar}></i>
            </div>
            <div className='copy col-7'>
              <div className='heading'>
                <h4>@dig1tt</h4>
                <h6 className='font-weight-300'>
                  <i>Roblox Developer</i>
                </h6>
                <h6 className='font-weight-300'>
                  <i>Software Developer</i>
                </h6>
              </div>
              <div className='links'>
                {Object.keys(socials).map((name, i) => {
                  return (
                    <a
                      href={socials[name]}
                      target='_blank'
                      rel='noopener noreferrer'
                      key={i}
                    >
                      <i className={`fab fa-${name} fa-2x`}></i>
                    </a>
                  );
                })}
              </div>
              {canShare && (
                <i
                  className='fa fa-share fa-2x share'
                  onClick={handleShareClick}
                ></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
