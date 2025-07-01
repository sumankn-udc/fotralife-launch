import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { trackEvent } from '../components/Analytics';

const Home = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Himalayan Trek Adventure",
      date: "July 15-22, 2025",
      location: "Manali to Kasol",
      difficulty: "Moderate",
      spots: "12 spots left",
      image: "assets/img/img-1.jpg"
    },
    {
      id: 2,
      title: "Coastal Bike Ride",
      date: "August 5-7, 2025", 
      location: "Goa Coastline",
      difficulty: "Easy",
      spots: "8 spots left",
      image: "assets/img/img-2.jpg"
    },
    {
      id: 3,
      title: "Mountain Biking Expedition",
      date: "August 20-25, 2025",
      location: "Ladakh Circuit",
      difficulty: "Hard",
      spots: "5 spots left",
      image: "assets/img/img-3.jpg"
    }
  ];

  const communityStats = [
    { number: "100+", label: "Active Members" },
    { number: "10+", label: "Events Completed" },
    { number: "10+", label: "States Covered" },
    { number: "10000+", label: "KMs Traveled" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Fotralife Adventure Backpack",
      price: "₹2,999",
      image: "assets/img/adventure-backpack.jpg",
      rating: 4.8
    },
    {
      id: 2,
      name: "Official Fotralife Jersey",
      price: "₹899",
      image: "assets/img/cycling-gear.jpg",
      rating: 4.9
    },
    {
      id: 3,
      name: "Trek Essentials Kit",
      price: "₹1,599",
      image: "assets/img/himalayan-trek.jpg",
      rating: 4.7
    }
  ];

  return (
    <div className="main-wrapper demo-06">
      {/* Hero Section */}
      <Hero 
        title="Adventure Awaits - Join the Journey"
        subtitle="Connect with fellow adventurers, explore breathtaking destinations, and create unforgettable memories through our organized bike rides and treks."
        showCountdown={false}
        showButtons={true}
        backgroundImage="assets/img/hero-background.jpg"
      />

      {/* Community Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            {communityStats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="stat-item wow fadeInUp" data-wow-delay={`.${index + 2}s`}>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Upcoming Adventures</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Join our next expedition and create memories that last a lifetime
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className="col-lg-4 col-md-6">
                <div className="event-card wow fadeInUp" data-wow-delay={`.${index + 2}s`}>
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="difficulty-badge difficulty-{event.difficulty.toLowerCase()}">
                      {event.difficulty}
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>{event.title}</h4>
                    <div className="event-details">
                      <p><i className="lni lni-calendar"></i> {event.date}</p>
                      <p><i className="lni lni-map-marker"></i> {event.location}</p>
                      <p className="spots-left"><i className="lni lni-users"></i> {event.spots}</p>
                    </div>
                    <Link 
                      to="/events" 
                      className="event-btn"
                      onClick={() => trackEvent('event_interest', {
                        event_name: event.title,
                        section: 'upcoming_events'
                      })}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="row">
            <div className="col-12 text-center">
              <Link 
                to="/events" 
                className="common-btn wow fadeInUp" 
                data-wow-delay=".6s"
                onClick={() => trackEvent('cta_click', {
                  button: 'view_all_events',
                  section: 'upcoming_events'
                })}
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Gear Up for Adventure</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Essential gear and merchandise for every adventurer
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="product-card wow fadeInUp" data-wow-delay={`.${index + 2}s`}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <h4>{product.name}</h4>
                    <div className="product-rating">
                      <span className="rating">★★★★★</span>
                      <span className="rating-text">({product.rating})</span>
                    </div>
                    <div className="product-price">
                      <span className="price">{product.price}</span>
                    </div>
                    <Link 
                      to="/shop" 
                      className="product-btn"
                      onClick={() => trackEvent('product_interest', {
                        product_name: product.name,
                        price: product.price,
                        section: 'featured_products'
                      })}
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="row">
            <div className="col-12 text-center">
              <Link 
                to="/shop" 
                className="common-btn wow fadeInUp" 
                data-wow-delay=".6s"
                onClick={() => trackEvent('cta_click', {
                  button: 'visit_shop',
                  section: 'featured_products'
                })}
              >
                Visit Shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto text-center">
              <div className="cta-content wow fadeInUp" data-wow-delay=".2s">
                <h1 className="text-white">Ready to Start Your Adventure?</h1>
                <p className="text-white">
                  Join thousands of adventure enthusiasts in our community. 
                  Get access to exclusive events, connect with fellow travelers, 
                  and gear up for your next big adventure.
                </p>
                <div className="cta-buttons">
                  <Link 
                    to="/community" 
                    className="common-btn"
                    onClick={() => trackEvent('cta_click', {
                      button: 'join_now',
                      section: 'bottom_cta'
                    })}
                  >
                    Join Now
                  </Link>
                  <Link 
                    to="/contact" 
                    className="common-btn btn-outline"
                    onClick={() => trackEvent('cta_click', {
                      button: 'contact_us',
                      section: 'bottom_cta'
                    })}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 