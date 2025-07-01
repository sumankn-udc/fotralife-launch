import React from 'react';
import { trackEvent } from './Analytics';

const Header = () => {
  return (
    <div className="header header-06">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <a href="/" className="logo">
              <img src="assets/img/logo.png" alt="Fotralife Logo" />
            </a>
          </div>
          <div className="col-md-8">
            <div className="header-right text-right">
              <a 
                href="mailto:info@fotralife.com"
                onClick={() => trackEvent('email_click', {
                  email: 'info@fotralife.com',
                  section: 'header',
                  action: 'contact_attempt'
                })}
              >
                Say hello! info@fotralife.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 