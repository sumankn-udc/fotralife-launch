import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../components/Analytics';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Himalayan Trek Adventure",
      date: "July 15-22, 2025",
      location: "Manali to Kasol",
      difficulty: "Moderate",
      price: "₹8,999",
      duration: "8 Days",
      spots: "12 spots left",
      type: "trek",
      image: "assets/img/img-1.jpg",
      description: "Experience the breathtaking beauty of Himalayas with this moderate trek suitable for beginners.",
      includes: ["Accommodation", "Meals", "Guide", "Transport"]
    },
    {
      id: 2,
      title: "Coastal Bike Ride",
      date: "August 5-7, 2025",
      location: "Goa Coastline",
      difficulty: "Easy",
      price: "₹3,999",
      duration: "3 Days",
      spots: "8 spots left",
      type: "bike",
      image: "assets/img/img-2.jpg",
      description: "Ride along the stunning Goa coastline with stops at beautiful beaches and local cafes.",
      includes: ["Bike Rental", "Accommodation", "Breakfast", "Guide"]
    },
    {
      id: 3,
      title: "Mountain Biking Expedition",
      date: "August 20-25, 2025",
      location: "Ladakh Circuit",
      difficulty: "Hard",
      price: "₹15,999",
      duration: "6 Days",
      spots: "5 spots left",
      type: "bike",
      image: "assets/img/img-3.jpg",
      description: "Challenge yourself with high-altitude mountain biking in the stunning landscapes of Ladakh.",
      includes: ["Bike Rental", "Accommodation", "All Meals", "Guide", "Permits"]
    },
    {
      id: 4,
      title: "Western Ghats Trek",
      date: "September 10-12, 2025",
      location: "Sahyadri Mountains",
      difficulty: "Moderate",
      price: "₹4,999",
      duration: "3 Days",
      spots: "15 spots left",
      type: "trek",
      image: "assets/img/img-1.jpg",
      description: "Explore the lush green Western Ghats with waterfalls and scenic viewpoints.",
      includes: ["Accommodation", "Meals", "Guide", "First Aid"]
    },
    {
      id: 5,
      title: "Desert Bike Safari",
      date: "October 5-8, 2025",
      location: "Rajasthan Desert",
      difficulty: "Moderate",
      price: "₹6,999",
      duration: "4 Days",
      spots: "10 spots left",
      type: "bike",
      image: "assets/img/img-2.jpg",
      description: "Experience the magic of Rajasthan desert with camel rides and cultural experiences.",
      includes: ["Bike Rental", "Desert Camp", "Cultural Shows", "Guide"]
    },
    {
      id: 6,
      title: "Valley of Flowers Trek",
      date: "October 20-26, 2025",
      location: "Uttarakhand",
      difficulty: "Hard",
      price: "₹12,999",
      duration: "7 Days",
      spots: "6 spots left",
      type: "trek",
      image: "assets/img/img-3.jpg",
      description: "Witness the spectacular Valley of Flowers in full bloom during the best season.",
      includes: ["Accommodation", "All Meals", "Expert Guide", "Permits", "Medical Kit"]
    }
  ];

  const filterOptions = [
    { key: 'all', label: 'All Events' },
    { key: 'bike', label: 'Bike Rides' },
    { key: 'trek', label: 'Treks' }
  ];

  const difficultyOptions = [
    { key: 'all', label: 'All Levels' },
    { key: 'easy', label: 'Easy' },
    { key: 'moderate', label: 'Moderate' },
    { key: 'hard', label: 'Hard' }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.type === activeFilter);

  return (
    <div className="main-wrapper demo-06">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header-content text-center">
                <h1 className="text-white wow fadeInUp" data-wow-delay=".2s">
                  Adventure Events
                </h1>
                <p className="text-white wow fadeInUp" data-wow-delay=".4s">
                  Discover thrilling bike rides and treks organized by our expert team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Filter & List */}
      <section className="events-listing">
        <div className="container">
          {/* Filter Tabs */}
          <div className="row">
            <div className="col-xl-12">
              <div className="events-filter wow fadeInUp" data-wow-delay=".2s">
                <div className="filter-tabs">
                  {filterOptions.map((option) => (
                    <button
                      key={option.key}
                      className={`filter-btn ${activeFilter === option.key ? 'active' : ''}`}
                      onClick={() => {
                        setActiveFilter(option.key);
                        trackEvent('filter_click', {
                          filter_type: option.key,
                          section: 'events_filter'
                        });
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="row">
            {filteredEvents.map((event, index) => (
              <div key={event.id} className="col-lg-6 col-xl-4">
                <div className="event-card-detailed wow fadeInUp" data-wow-delay={`.${index % 3 + 2}s`}>
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="event-badges">
                      <span className={`difficulty-badge difficulty-${event.difficulty.toLowerCase()}`}>
                        {event.difficulty}
                      </span>
                      <span className={`type-badge type-${event.type}`}>
                        {event.type === 'bike' ? '🚴‍♂️' : '🥾'} {event.type}
                      </span>
                    </div>
                    <div className="event-price">
                      <span className="price">{event.price}</span>
                    </div>
                  </div>

                  <div className="event-content">
                    <h4>{event.title}</h4>
                    <p className="event-description">{event.description}</p>
                    
                    <div className="event-details">
                      <div className="detail-item">
                        <i className="lni lni-calendar"></i>
                        <span>{event.date}</span>
                      </div>
                      <div className="detail-item">
                        <i className="lni lni-map-marker"></i>
                        <span>{event.location}</span>
                      </div>
                      <div className="detail-item">
                        <i className="lni lni-timer"></i>
                        <span>{event.duration}</span>
                      </div>
                      <div className="detail-item spots-left">
                        <i className="lni lni-users"></i>
                        <span>{event.spots}</span>
                      </div>
                    </div>

                    <div className="event-includes">
                      <h6>Includes:</h6>
                      <ul>
                        {event.includes.map((item, idx) => (
                          <li key={idx}><i className="lni lni-checkmark"></i> {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="event-actions">
                      <button 
                        className="common-btn event-register-btn"
                        onClick={() => trackEvent('event_register_click', {
                          event_name: event.title,
                          event_price: event.price,
                          event_type: event.type,
                          section: 'events_listing'
                        })}
                      >
                        Register Now
                      </button>
                      <button 
                        className="btn-outline event-details-btn"
                        onClick={() => trackEvent('event_details_click', {
                          event_name: event.title,
                          section: 'events_listing'
                        })}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="no-events">
                  <h3>No events found</h3>
                  <p>Try adjusting your filters or check back later for new adventures!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto text-center">
              <div className="cta-content wow fadeInUp" data-wow-delay=".2s">
                <h2 className="text-white">Don't See Your Perfect Adventure?</h2>
                <p className="text-white">
                  We're always planning new exciting events. Join our community to get 
                  notified about upcoming adventures or suggest your own!
                </p>
                <div className="cta-buttons">
                  <Link 
                    to="/community" 
                    className="common-btn"
                    onClick={() => trackEvent('cta_click', {
                      button: 'join_community',
                      section: 'events_cta'
                    })}
                  >
                    Join Community
                  </Link>
                  <Link 
                    to="/contact" 
                    className="common-btn btn-outline"
                    onClick={() => trackEvent('cta_click', {
                      button: 'suggest_event',
                      section: 'events_cta'
                    })}
                  >
                    Suggest Event
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

export default Events; 