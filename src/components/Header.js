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
      <div className="container-fluid px-3">
        <div className="header-flex-container">
          <div className="header-logo">
            <Link to="/" className="logo">
              <img src="assets/img/logo.png" alt="Fotralife - Adventure Travel Community" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="header-navigation d-none d-lg-block">
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
          
          {/* Tablet Navigation - Compact */}
          <nav className="header-navigation-tablet d-none d-md-block d-lg-none">
            <ul className="navigation-menu-compact">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`nav-link-compact ${isActive(item.href) ? 'active' : ''}`}
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
          
          <div className="header-actions">
            {/* CTA Button - visible on large screens */}
            <div className="header-cta d-none d-xl-block">
              <Link 
                to="/events" 
                className="header-btn"
                onClick={() => trackEvent('cta_click', {
                  button: 'header_explore_events',
                  section: 'header'
                })}
              >
                Explore Events
              </Link>
            </div>
            
            {/* Compact CTA Button - visible on medium screens */}
            <div className="header-cta-compact d-none d-lg-block d-xl-none">
              <Link 
                to="/events" 
                className="header-btn-compact"
                onClick={() => trackEvent('cta_click', {
                  button: 'header_explore_events',
                  section: 'header'
                })}
              >
                Events
              </Link>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle d-lg-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-navigation d-lg-none">
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
              {/* Mobile CTA Button */}
              <li>
                <Link 
                  to="/events" 
                  className="mobile-cta-btn"
                  onClick={() => {
                    setIsMenuOpen(false);
                    trackEvent('cta_click', {
                      button: 'mobile_explore_events',
                      section: 'mobile_menu'
                    });
                  }}
                >
                  🎪 Explore Events
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header; 