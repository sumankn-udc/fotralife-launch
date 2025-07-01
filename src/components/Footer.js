import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from './Analytics';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Community', href: '/community' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/fotralife',
      icon: 'lni lni-instagram-original'
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/@fotralife',
      icon: 'lni lni-youtube'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/fotralife',
      icon: 'lni lni-facebook-filled'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/fotralife',
      icon: 'lni lni-twitter-filled'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="assets/img/logo.png" alt="Fotralife" />
                  </Link>
                </div>
                <p className="footer-description">
                  Join India's premier adventure travel community. Experience thrilling bike rides, 
                  challenging treks, and create lifelong memories with fellow adventurers.
                </p>
                <div className="footer-contact">
                  <div className="contact-item">
                    <i className="lni lni-envelope"></i>
                    <a href="mailto:info@fotralife.com">info@fotralife.com</a>
                  </div>
                  <div className="contact-item">
                    <i className="lni lni-phone"></i>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                  <div className="contact-item">
                    <i className="lni lni-map-marker"></i>
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget wow fadeInUp" data-wow-delay=".3s">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        onClick={() => trackEvent('footer_link_click', {
                          link_text: link.name,
                          link_url: link.href,
                          section: 'footer_quick_links'
                        })}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget wow fadeInUp" data-wow-delay=".4s">
                <h4 className="footer-title">Our Services</h4>
                <ul className="footer-links">
                  <li>
                    <Link to="/events" onClick={() => trackEvent('footer_service_click', { service: 'adventure_events' })}>
                      Adventure Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" onClick={() => trackEvent('footer_service_click', { service: 'trekking' })}>
                      Trekking Expeditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" onClick={() => trackEvent('footer_service_click', { service: 'bike_rides' })}>
                      Bike Rides
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" onClick={() => trackEvent('footer_service_click', { service: 'gear' })}>
                      Adventure Gear
                    </Link>
                  </li>
                  <li>
                    <Link to="/community" onClick={() => trackEvent('footer_service_click', { service: 'community' })}>
                      Community Access
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={() => trackEvent('footer_service_click', { service: 'custom_events' })}>
                      Custom Events
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget wow fadeInUp" data-wow-delay=".5s">
                <h4 className="footer-title">Stay Connected</h4>
                <p className="newsletter-text">
                  Subscribe to get updates on new events and adventures.
                </p>
                <div className="newsletter-form">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    trackEvent('newsletter_signup', {
                      section: 'footer'
                    });
                    alert('Thank you for subscribing! We\'ll keep you updated on new adventures.');
                  }}>
                    <div className="form-group">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        required
                      />
                      <button type="submit" className="subscribe-btn">
                        <i className="lni lni-telegram-original"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      onClick={() => trackEvent('social_click', {
                        platform: social.name.toLowerCase(),
                        section: 'footer'
                      })}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright">
                <p>
                  © {currentYear} Fotralife. All rights reserved. Part of <a 
                    href="https://undash-cop.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('footer_link_click', {
                      link_text: 'Undash-cop',
                      link_url: 'https://undash-cop.com',
                      section: 'footer_copyright'
                    })}
                  >
                    Undash-cop
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-links-bottom">
                <ul>
                  <li>
                    <Link to="/privacy" onClick={() => trackEvent('footer_legal_click', { page: 'privacy' })}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" onClick={() => trackEvent('footer_legal_click', { page: 'terms' })}>
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={() => trackEvent('footer_legal_click', { page: 'support' })}>
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 