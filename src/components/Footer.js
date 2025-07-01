import React from 'react';
import { trackEvent } from './Analytics';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="copyright wow fadeInLeft" data-wow-delay=".2s">
              <p>
                Part of <a 
                  href="https://undash-cop.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('footer_link_click', {
                    link_text: 'Part of Undash-cop',
                    link_url: 'https://undash-cop.com',
                    section: 'footer_copyright'
                  })}
                >
                  Undash-cop
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="credit wow fadeInRight" data-wow-delay=".4s">
              <p>
                Designed and Developed by{' '}
                <a 
                  href="https://undash-cop.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('footer_link_click', {
                    link_text: 'Undash-cop Pvt Ltd',
                    link_url: 'https://undash-cop.com',
                    section: 'footer_credit'
                  })}
                >
                  Undash-cop Pvt Ltd
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; 