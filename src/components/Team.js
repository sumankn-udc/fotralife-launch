import React from 'react';
import { trackEvent } from './Analytics';

const Team = () => {
  return (
    <div className="team-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title">
              <h1 className="wow fadeInUp" data-wow-delay=".2s">Our Real Hero</h1>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Every month, amounts of Projects <br className="d-none d-lg-block" /> handover by this genius team.
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title">
              <h1>Follow us on</h1>
              <ul className="social-links">
                <li>
                  <a 
                    href="https://www.instagram.com/fotralife/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('social_media_click', {
                      platform: 'instagram',
                      link_url: 'https://www.instagram.com/fotralife/',
                      section: 'social_links'
                    })}
                  >
                    <i className="lni lni-instagram-original"></i> Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/@fotralife" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('social_media_click', {
                      platform: 'youtube',
                      link_url: 'https://www.youtube.com/@fotralife',
                      section: 'social_links'
                    })}
                  >
                    <i className="lni lni-youtube"></i> Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="team-wrapper">
          {/* Team items are commented out in the original HTML */}
          {/* You can uncomment and add team members here when needed */}
        </div>
      </div>
    </div>
  );
};

export default Team; 