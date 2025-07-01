import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { trackEvent } from '../components/Analytics';

const Community = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const communityFeatures = [
    {
      title: "Exclusive Events",
      description: "Get early access to limited-seat adventures and member-only events",
      icon: "🎪"
    },
    {
      title: "Adventure Network",
      description: "Connect with like-minded adventurers and form lasting friendships",
      icon: "👥"
    },
    {
      title: "Gear Discounts",
      description: "Special discounts on adventure gear and Fotralife merchandise",
      icon: "🛒"
    },
    {
      title: "Expert Guidance",
      description: "Access to experienced guides and adventure planning resources",
      icon: "🗺️"
    },
    {
      title: "Achievement Badges",
      description: "Earn badges for completing events and reaching milestones",
      icon: "🏆"
    },
    {
      title: "Trip Planning",
      description: "Collaborative trip planning tools and route sharing",
      icon: "📅"
    }
  ];

  const membershipPlans = [
    {
      name: "Explorer",
      price: "Free",
      duration: "Lifetime",
      features: [
        "Access to public events",
        "Community forum",
        "Basic trip planning tools",
        "Monthly newsletter"
      ],
      recommended: false
    },
    {
      name: "Adventurer",
      price: "₹999",
      duration: "Per Year",
      features: [
        "All Explorer features",
        "Early event access",
        "10% gear discount",
        "Member-only events",
        "Priority customer support"
      ],
      recommended: true
    },
    {
      name: "Explorer Pro",
      price: "₹2,499",
      duration: "Per Year",
      features: [
        "All Adventurer features",
        "Unlimited event access",
        "20% gear discount",
        "Personal adventure planner",
        "VIP support",
        "Custom trip planning"
      ],
      recommended: false
    }
  ];

  return (
    <div className="main-wrapper demo-06">
      {/* Page Header */}
      <PageHeader 
        title="Join Our Community"
        subtitle="Connect with adventure enthusiasts and unlock exclusive benefits"
      />

      {/* Community Features */}
      <section className="community-features">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Why Join Fotralife Community?</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Unlock exclusive benefits and connect with fellow adventurers
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="feature-card wow fadeInUp" data-wow-delay={`.${index % 3 + 2}s`}>
                  <div className="feature-icon">
                    <span className="icon-emoji">{feature.icon}</span>
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="membership-plans">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Choose Your Adventure Level</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Select a membership plan that fits your adventure style
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            {membershipPlans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`pricing-card wow fadeInUp ${plan.recommended ? 'recommended' : ''}`} 
                     data-wow-delay={`.${index + 2}s`}>
                  {plan.recommended && (
                    <div className="recommended-badge">
                      <span>Most Popular</span>
                    </div>
                  )}
                  
                  <div className="pricing-header">
                    <h3>{plan.name}</h3>
                    <div className="price">
                      <span className="amount">{plan.price}</span>
                      <span className="duration">/{plan.duration}</span>
                    </div>
                  </div>
                  
                  <div className="pricing-features">
                    <ul>
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="lni lni-checkmark"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pricing-action">
                    <button 
                      className={`common-btn ${plan.recommended ? '' : 'btn-outline'}`}
                      onClick={() => {
                        setShowRegistrationForm(true);
                        trackEvent('membership_select', {
                          plan_name: plan.name,
                          plan_price: plan.price,
                          section: 'membership_plans'
                        });
                      }}
                    >
                      {plan.price === 'Free' ? 'Join Free' : 'Get Started'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="registration-modal">
          <div className="modal-overlay" onClick={() => setShowRegistrationForm(false)}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Join Fotralife Community</h3>
              <button 
                className="close-btn"
                onClick={() => setShowRegistrationForm(false)}
                aria-label="Close registration form"
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <form className="registration-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" required placeholder="Enter your full name" />
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" required placeholder="Enter your email" />
                </div>
                
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" required placeholder="Enter your phone number" />
                </div>
                
                <div className="form-group">
                  <label>Experience Level</label>
                  <select>
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Interests (Select all that apply)</label>
                  <div className="checkbox-group">
                    <label><input type="checkbox" /> Bike Rides</label>
                    <label><input type="checkbox" /> Trekking</label>
                    <label><input type="checkbox" /> Mountain Biking</label>
                    <label><input type="checkbox" /> Photography</label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>
                    <input type="checkbox" required />
                    I agree to the terms and conditions and privacy policy
                  </label>
                </div>
                
                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="common-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      trackEvent('registration_submit', {
                        section: 'community_registration'
                      });
                      alert('Registration functionality will be implemented soon!');
                    }}
                  >
                    Join Community
                  </button>
                  <button 
                    type="button" 
                    className="btn-outline"
                    onClick={() => setShowRegistrationForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Community Stats */}
      <section className="community-stats">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="stats-grid">
                <div className="stat-item wow fadeInUp" data-wow-delay=".2s">
                  <h3>100+</h3>
                  <p>Active Members</p>
                </div>
                <div className="stat-item wow fadeInUp" data-wow-delay=".3s">
                  <h3>10+</h3>
                  <p>Events Completed</p>
                </div>
                <div className="stat-item wow fadeInUp" data-wow-delay=".4s">
                  <h3>10+</h3>
                  <p>States Covered</p>
                </div>
                <div className="stat-item wow fadeInUp" data-wow-delay=".5s">
                  <h3>10000+</h3>
                  <p>KMs Traveled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="community-cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto text-center">
              <div className="cta-content wow fadeInUp" data-wow-delay=".2s">
                <h2 className="text-white">Ready to Begin Your Adventure Journey?</h2>
                <p className="text-white">
                  Join our community today and connect with fellow adventurers who share your passion for exploration.
                </p>
                <button 
                  className="common-btn"
                  onClick={() => {
                    setShowRegistrationForm(true);
                    trackEvent('cta_click', {
                      button: 'join_community_cta',
                      section: 'community_bottom_cta'
                    });
                  }}
                >
                  Join Community Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community; 