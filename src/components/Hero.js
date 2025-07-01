import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from './Countdown';
import { trackEvent } from './Analytics';

const Hero = ({ 
  title = "Adventure Awaits", 
  subtitle = "Join the ultimate travel community for bikers and trekkers",
  showCountdown = true,
  showButtons = true,
  backgroundImage = null,
  children 
}) => {
  const handleJoinClick = () => {
    trackEvent('cta_click', {
      button: 'join_community',
      section: 'hero',
      action: 'community_signup'
    });
  };

  const handleEventsClick = () => {
    trackEvent('cta_click', {
      button: 'explore_events',
      section: 'hero',
      action: 'view_events'
    });
  };

  return (
    <div className="hero-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="wow fadeInUp" data-wow-delay=".2s">
                {title}
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                {subtitle}
              </p>
              
              {showCountdown && (
                <div className="countdown-section wow fadeInUp" data-wow-delay=".6s">
                  <Countdown />
                </div>
              )}
              
              {showButtons && (
                <div className="hero-buttons wow fadeInUp" data-wow-delay=".8s">
                  <Link 
                    to="/community" 
                    className="common-btn"
                    onClick={handleJoinClick}
                  >
                    Join Community
                  </Link>
                  <Link 
                    to="/events" 
                    className="common-btn btn-outline"
                    onClick={handleEventsClick}
                  >
                    Explore Events
                  </Link>
                </div>
              )}
              
              {children}
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="hero-image wow fadeInRight" data-wow-delay=".5s">
              <img 
                src={backgroundImage || "assets/img/img-1.jpg"} 
                alt="Adventure Travel Community"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 