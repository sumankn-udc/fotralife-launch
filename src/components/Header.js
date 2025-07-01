import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackEvent } from './Analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Community', href: '/community' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="header header-06">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <Link to="/" className="logo">
              <img src="assets/img/logo.png" alt="Fotralife - Adventure Travel Community" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="col-md-6 d-none d-md-block">
            <nav className="main-navigation">
              <ul className="navigation-menu">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                      onClick={() => trackEvent('navigation_click', {
                        page: item.name.toLowerCase(),
                        section: 'header_menu'
                      })}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="col-md-3">
            <div className="header-right text-right">
              {/* Contact Info */}
              <div className="contact-info d-none d-lg-block">
                <a 
                  href="mailto:info@fotralife.com"
                  onClick={() => trackEvent('email_click', {
                    email: 'info@fotralife.com',
                    section: 'header',
                    action: 'contact_attempt'
                  })}
                >
                  info@fotralife.com
                </a>
              </div>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="mobile-menu-toggle d-md-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-navigation d-md-none">
            <ul className="mobile-menu">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      trackEvent('navigation_click', {
                        page: item.name.toLowerCase(),
                        section: 'mobile_menu'
                      });
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="mailto:info@fotralife.com"
                  className="mobile-contact"
                  onClick={() => trackEvent('email_click', {
                    email: 'info@fotralife.com',
                    section: 'mobile_menu',
                    action: 'contact_attempt'
                  })}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header; 