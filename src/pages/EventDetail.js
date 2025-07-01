import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { trackEvent } from '../components/Analytics';

// Events data (in a real app, this would come from an API)
const eventsData = [
    {
      id: 1,
      title: "Himalayan Trek Adventure",
      date: "July 15-22, 2025",
      location: "Manali to Kasol",
      difficulty: "Moderate",
      price: "₹8,999",
      originalPrice: "₹10,999",
      duration: "8 Days",
      spots: "12 spots left",
      maxSpots: 20,
      type: "trek",
      images: [
        "assets/img/himalayan-trek.jpg",
        "assets/img/mountain-biking.jpg",
        "assets/img/group-adventure.jpg"
      ],
      description: "Experience the breathtaking beauty of Himalayas with this moderate trek suitable for beginners and intermediate trekkers.",
      longDescription: "Embark on an unforgettable journey through the majestic Himalayas, starting from the adventure hub of Manali and ending in the serene valley of Kasol. This 8-day trek offers stunning mountain vistas, pristine alpine meadows, and an opportunity to disconnect from the digital world while connecting with nature.",
      includes: ["Accommodation", "All Meals", "Professional Guide", "Transport", "Permits", "First Aid"],
      itinerary: [
        { day: 1, title: "Arrival in Manali", description: "Check-in, briefing, and local sightseeing" },
        { day: 2, title: "Manali to Base Camp", description: "Drive to base camp, acclimatization walk" },
        { day: 3, title: "Trek to Alpine Meadows", description: "6-hour trek through beautiful landscapes" },
        { day: 4, title: "Explore Mountain Passes", description: "Day hike to scenic viewpoints" },
        { day: 5, title: "Summit Day", description: "Early morning summit attempt and descent" },
        { day: 6, title: "Trek to Kasol Valley", description: "Descend through pine forests to Kasol" },
        { day: 7, title: "Rest Day in Kasol", description: "Explore local cafes and markets" },
        { day: 8, title: "Departure", description: "Return journey to Manali/Delhi" }
      ],
      whatToBring: [
        "Trekking boots (waterproof)",
        "Warm clothing (layers)",
        "Rain gear",
        "Personal medication",
        "Headlamp/flashlight",
        "Water bottles",
        "Sunglasses and sunscreen",
        "Personal toiletries"
      ],
      guide: {
        name: "Raj Kumar",
        experience: "8 years",
        expertise: "High altitude trekking",
        image: "assets/img/prathapa-guide.jpg"
      },
      reviews: [
        {
          name: "Priya Sharma",
          rating: 5,
          comment: "Amazing experience! The views were breathtaking and our guide was excellent.",
          date: "March 2024"
        },
        {
          name: "Arjun Patel",
          rating: 5,
          comment: "Well organized trek with great food and accommodation. Highly recommended!",
          date: "February 2024"
        }
      ]
    },
    {
      id: 2,
      title: "Coastal Bike Ride",
      date: "August 5-7, 2025",
      location: "Goa Coastline",
      difficulty: "Easy",
      price: "₹3,999",
      originalPrice: "₹4,999",
      duration: "3 Days",
      spots: "8 spots left",
      maxSpots: 15,
      type: "bike",
      images: [
        "assets/img/coastal-biking.jpg",
        "assets/img/cycling-gear.jpg",
        "assets/img/group-adventure.jpg"
      ],
      description: "Ride along the stunning Goa coastline with stops at beautiful beaches and local cafes.",
      longDescription: "Discover the beauty of Goa's coastline on two wheels! This leisurely bike ride takes you through scenic coastal roads, pristine beaches, and charming local villages. Perfect for beginners and families.",
      includes: ["Bike Rental", "Helmet & Safety Gear", "Accommodation", "Breakfast", "Professional Guide", "Support Vehicle"],
      itinerary: [
        { day: 1, title: "Arrival & North Goa", description: "Check-in, bike fitting, and ride to Anjuna Beach" },
        { day: 2, title: "Central Goa Exploration", description: "Ride through Panaji, spice plantations, and local markets" },
        { day: 3, title: "South Goa & Departure", description: "Morning ride to Palolem Beach and departure" }
      ],
      whatToBring: [
        "Comfortable cycling clothes",
        "Sunglasses",
        "Sunscreen",
        "Water bottle",
        "Light backpack",
        "Swimwear",
        "Casual evening wear"
      ],
      guide: {
        name: "Maria Fernandes",
        experience: "5 years",
        expertise: "Coastal cycling tours",
        image: "assets/img/abhiste-founder.jpg"
      },
      reviews: [
        {
          name: "Sahil Gupta",
          rating: 4,
          comment: "Great way to explore Goa! The pace was perfect and the beaches were amazing.",
          date: "January 2024"
        }
      ]
    },
    {
      id: 3,
      title: "Mountain Biking Expedition",
      date: "August 20-25, 2025",
      location: "Ladakh Circuit",
      difficulty: "Hard",
      price: "₹15,999",
      originalPrice: "₹18,999",
      duration: "6 Days",
      spots: "5 spots left",
      maxSpots: 12,
      type: "bike",
      images: [
        "assets/img/mountain-biking.jpg",
        "assets/img/desert-adventure.jpg",
        "assets/img/group-adventure.jpg"
      ],
      description: "Challenge yourself with high-altitude mountain biking in the stunning landscapes of Ladakh.",
      longDescription: "This challenging mountain biking expedition takes you through some of the world's highest motorable roads in Ladakh. Experience the raw beauty of the Himalayas while testing your limits on this adrenaline-pumping adventure.",
      includes: ["Bike Rental", "Accommodation", "All Meals", "Professional Guide", "Permits", "Oxygen Support"],
      itinerary: [
        { day: 1, title: "Arrival in Leh", description: "Acclimatization day with bike fitting and local exploration" },
        { day: 2, title: "Leh to Nubra Valley", description: "Cross Khardung La Pass - world's highest motorable road" },
        { day: 3, title: "Nubra Valley Exploration", description: "Ride through sand dunes and visit double-humped camels" },
        { day: 4, title: "Pangong Lake Route", description: "Spectacular ride to the famous blue lake" },
        { day: 5, title: "High Altitude Passes", description: "Challenge multiple high-altitude mountain passes" },
        { day: 6, title: "Return to Leh", description: "Final descent and celebration dinner" }
      ],
      whatToBring: [
        "Mountain biking gear",
        "High-altitude clothing",
        "Sunglasses and sunscreen",
        "Personal medication",
        "Energy snacks",
        "Water bottles",
        "Action camera (optional)"
      ],
      guide: {
        name: "Tenzin Norbu",
        experience: "10 years",
        expertise: "High-altitude biking and Ladakh region",
        image: "assets/img/karthik-designer.jpg"
      },
      reviews: [
        {
          name: "Vikram Singh",
          rating: 5,
          comment: "Absolutely incredible! The most challenging and rewarding biking experience of my life.",
          date: "June 2024"
        },
        {
          name: "Anita Reddy",
          rating: 5,
          comment: "Well-organized expedition with excellent safety measures. The views were unreal!",
          date: "May 2024"
        }
      ]
    },
    {
      id: 4,
      title: "Western Ghats Trek",
      date: "September 10-12, 2025",
      location: "Sahyadri Mountains",
      difficulty: "Moderate",
      price: "₹4,999",
      originalPrice: "₹6,999",
      duration: "3 Days",
      spots: "15 spots left",
      maxSpots: 25,
      type: "trek",
      images: [
        "assets/img/group-adventure.jpg",
        "assets/img/himalayan-trek.jpg",
        "assets/img/team-hiking.jpg"
      ],
      description: "Explore the lush green Western Ghats with waterfalls and scenic viewpoints.",
      longDescription: "Discover the biodiversity hotspot of Western Ghats with this moderate trek through lush forests, cascading waterfalls, and breathtaking viewpoints. Perfect for monsoon season adventures.",
      includes: ["Accommodation", "All Meals", "Professional Guide", "First Aid", "Transport"],
      itinerary: [
        { day: 1, title: "Base Camp Setup", description: "Arrive at base camp, team introduction, and evening trek" },
        { day: 2, title: "Waterfall Trek", description: "Full day exploration of hidden waterfalls and natural pools" },
        { day: 3, title: "Summit & Departure", description: "Early morning summit for sunrise views and return journey" }
      ],
      whatToBring: [
        "Rain gear (essential)",
        "Trekking shoes with good grip",
        "Quick-dry clothing",
        "Personal medication",
        "Water bottles",
        "Small backpack"
      ],
      guide: {
        name: "Ravi Kumar",
        experience: "6 years",
        expertise: "Western Ghats ecology and trekking",
        image: "assets/img/suman-cofounder.jpg"
      },
      reviews: [
        {
          name: "Meera Nair",
          rating: 4,
          comment: "Beautiful trek with amazing waterfalls. Great for beginners to moderate trekking.",
          date: "September 2023"
        }
      ]
    },
    {
      id: 5,
      title: "Desert Bike Safari",
      date: "October 5-8, 2025",
      location: "Rajasthan Desert",
      difficulty: "Moderate",
      price: "₹6,999",
      originalPrice: "₹8,999",
      duration: "4 Days",
      spots: "10 spots left",
      maxSpots: 18,
      type: "bike",
      images: [
        "assets/img/desert-adventure.jpg",
        "assets/img/cycling-gear.jpg",
        "assets/img/group-adventure.jpg"
      ],
      description: "Experience the magic of Rajasthan desert with camel rides and cultural experiences.",
      longDescription: "Embark on a unique desert adventure combining biking through sand dunes, camel safaris, and immersive cultural experiences in the heart of Rajasthan's Thar Desert.",
      includes: ["Bike Rental", "Desert Camp", "Cultural Shows", "Professional Guide", "Camel Safari"],
      itinerary: [
        { day: 1, title: "Jaisalmer Arrival", description: "City tour and bike fitting, evening cultural program" },
        { day: 2, title: "Desert Safari", description: "Bike to desert camp, camel safari, and overnight camping" },
        { day: 3, title: "Village Experience", description: "Visit local villages and experience traditional Rajasthani culture" },
        { day: 4, title: "Return Journey", description: "Morning desert ride and departure" }
      ],
      whatToBring: [
        "Light cotton clothing",
        "Hat and sunglasses",
        "Strong sunscreen",
        "Water bottles",
        "Comfortable shoes",
        "Camera"
      ],
      guide: {
        name: "Jagdish Singh",
        experience: "8 years",
        expertise: "Desert navigation and Rajasthani culture",
        image: "assets/img/yashwanth-manager.jpg"
      },
      reviews: [
        {
          name: "Rohit Sharma",
          rating: 4,
          comment: "Amazing cultural experience! The desert camping was unforgettable.",
          date: "October 2023"
        }
      ]
    },
    {
      id: 6,
      title: "Valley of Flowers Trek",
      date: "October 20-26, 2025",
      location: "Uttarakhand",
      difficulty: "Hard",
      price: "₹12,999",
      originalPrice: "₹15,999",
      duration: "7 Days",
      spots: "6 spots left",
      maxSpots: 16,
      type: "trek",
      images: [
        "assets/img/himalayan-trek.jpg",
        "assets/img/group-adventure.jpg",
        "assets/img/team-hiking.jpg"
      ],
      description: "Witness the spectacular Valley of Flowers in full bloom during the best season.",
      longDescription: "Experience one of India's most beautiful treks through the UNESCO World Heritage site, Valley of Flowers. This challenging trek rewards you with carpets of alpine flowers and stunning Himalayan views.",
      includes: ["Accommodation", "All Meals", "Expert Guide", "Permits", "Medical Kit", "Porter Support"],
      itinerary: [
        { day: 1, title: "Haridwar to Govindghat", description: "Drive to base point and prepare for trek" },
        { day: 2, title: "Trek to Ghangaria", description: "Base camp for Valley of Flowers exploration" },
        { day: 3, title: "Valley of Flowers", description: "Full day exploration of the flower valley" },
        { day: 4, title: "Hemkund Sahib", description: "Visit the sacred Sikh pilgrimage site" },
        { day: 5, title: "Extended Valley Exploration", description: "Deeper exploration of hidden valleys" },
        { day: 6, title: "Return to Govindghat", description: "Descent and cultural interaction" },
        { day: 7, title: "Return to Haridwar", description: "Final journey back to civilization" }
      ],
      whatToBring: [
        "High-altitude trekking gear",
        "Warm sleeping bag",
        "Rain protection",
        "Trekking poles",
        "High-energy snacks",
        "Camera with extra batteries",
        "Personal medication"
      ],
      guide: {
        name: "Bharat Singh",
        experience: "12 years",
        expertise: "High-altitude trekking and mountain botany",
        image: "assets/img/prathapa-guide.jpg"
      },
      reviews: [
        {
          name: "Pooja Gupta",
          rating: 5,
          comment: "Most beautiful trek I've ever done! The flowers were in full bloom and the guide was excellent.",
          date: "August 2023"
        },
        {
          name: "Arjun Mehta",
          rating: 5,
          comment: "Challenging but absolutely worth it. The Valley of Flowers is truly magical.",
          date: "July 2023"
        }
      ]
    }
  ];

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    console.log('EventDetail - ID from params:', id);
    const foundEvent = eventsData.find(e => e.id === parseInt(id));
    console.log('EventDetail - Found event:', foundEvent);
    
    if (foundEvent) {
      setEvent(foundEvent);
      console.log('EventDetail - Event set successfully');
      // Track page view
      trackEvent('event_detail_view', {
        event_id: id,
        event_name: foundEvent.title,
        event_type: foundEvent.type
      });
    } else {
      console.log('EventDetail - Event not found, navigating back');
      navigate('/events');
    }
  }, [id, navigate]);

  const handleRegistration = (formData) => {
    trackEvent('event_registration_submit', {
      event_id: id,
      event_name: event.title,
      event_price: event.price
    });
    alert('Registration successful! You will receive confirmation details via email.');
    setShowRegistrationModal(false);
  };

  if (!event) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="main-wrapper demo-06">
      {/* Event Hero Section */}
      <section className="event-hero">
        <div className="event-hero-bg" style={{ backgroundImage: `url(${event.images[0]})` }}>
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="event-hero-content">
                  <div className="event-badges">
                    <span className={`difficulty-badge difficulty-${event.difficulty.toLowerCase()}`}>
                      {event.difficulty}
                    </span>
                    <span className={`type-badge type-${event.type}`}>
                      {event.type === 'bike' ? '🚴‍♂️' : '🥾'} {event.type}
                    </span>
                  </div>
                  <h1 className="text-white">{event.title}</h1>
                  <p className="text-white event-subtitle">{event.description}</p>
                  
                  <div className="event-quick-info">
                    <div className="info-item">
                      <i className="lni lni-calendar"></i>
                      <span>{event.date}</span>
                    </div>
                    <div className="info-item">
                      <i className="lni lni-map-marker"></i>
                      <span>{event.location}</span>
                    </div>
                    <div className="info-item">
                      <i className="lni lni-timer"></i>
                      <span>{event.duration}</span>
                    </div>
                    <div className="info-item spots-indicator">
                      <i className="lni lni-users"></i>
                      <span>{event.spots}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-xl-4">
                <div className="event-booking-card">
                  <div className="price-section">
                    <div className="current-price">{event.price}</div>
                    {event.originalPrice && (
                      <div className="original-price">{event.originalPrice}</div>
                    )}
                    <div className="price-note">per person</div>
                  </div>
                  
                  <div className="availability">
                    <div className="spots-left">
                      <strong>{event.maxSpots - parseInt(event.spots.split(' ')[0])}</strong> out of <strong>{event.maxSpots}</strong> spots booked
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${((event.maxSpots - parseInt(event.spots.split(' ')[0])) / event.maxSpots) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button 
                    className="common-btn register-btn"
                    onClick={() => setShowRegistrationModal(true)}
                  >
                    Register Now
                  </button>
                  
                  <div className="booking-features">
                    <div className="feature">✓ Instant confirmation</div>
                    <div className="feature">✓ Free cancellation up to 7 days</div>
                    <div className="feature">✓ Expert guide included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Tabs */}
      <section className="event-details-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="detail-tabs">
                <nav className="tab-nav">
                  {['overview', 'itinerary', 'includes', 'guide', 'reviews'].map(tab => (
                    <button
                      key={tab}
                      className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>

                <div className="tab-content">
                  <div style={{ display: 'none' }}>Active tab: {activeTab}</div>
                  {activeTab === 'overview' && (
                    <div className="tab-pane">
                      <div className="row">
                        <div className="col-lg-8">
                          <h3>About This Adventure</h3>
                          <p>{event.longDescription}</p>
                          
                          <h4>What to Bring</h4>
                          <div className="bring-list">
                            {event.whatToBring.map((item, index) => (
                              <div key={index} className="bring-item">
                                <i className="lni lni-checkmark"></i>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="col-lg-4">
                          <div className="image-gallery">
                            {event.images.map((image, index) => (
                              <img key={index} src={image} alt={`${event.title} ${index + 1}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'itinerary' && (
                    <div className="tab-pane">
                      <h3>Day by Day Itinerary</h3>
                      <div className="itinerary-list">
                        {event.itinerary.map((day, index) => (
                          <div key={index} className="itinerary-item">
                            <div className="day-number">Day {day.day}</div>
                            <div className="day-content">
                              <h4>{day.title}</h4>
                              <p>{day.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'includes' && (
                    <div className="tab-pane">
                      <h3>What's Included</h3>
                      <div className="includes-grid">
                        {event.includes.map((item, index) => (
                          <div key={index} className="include-item">
                            <i className="lni lni-checkmark"></i>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'guide' && (
                    <div className="tab-pane">
                      <h3>Your Guide</h3>
                      <div className="guide-profile">
                        <img src={event.guide.image} alt={event.guide.name} />
                        <div className="guide-info">
                          <h4>{event.guide.name}</h4>
                          <p><strong>Experience:</strong> {event.guide.experience}</p>
                          <p><strong>Expertise:</strong> {event.guide.expertise}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="tab-pane">
                      <h3>Reviews from Adventurers</h3>
                      <div className="reviews-list">
                        {event.reviews.map((review, index) => (
                          <div key={index} className="review-item">
                            <div className="review-header">
                              <h5>{review.name}</h5>
                              <div className="review-rating">
                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                              </div>
                              <span className="review-date">{review.date}</span>
                            </div>
                            <p>{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="registration-modal">
          <div className="modal-overlay" onClick={() => setShowRegistrationModal(false)}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Register for {event.title}</h3>
              <button className="close-btn" onClick={() => setShowRegistrationModal(false)}>×</button>
            </div>
            
            <div className="modal-body">
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                handleRegistration(Object.fromEntries(formData));
              }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" required />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" required />
                </div>
                
                <div className="form-group">
                  <label>Emergency Contact</label>
                  <input type="text" name="emergency_contact" required />
                </div>
                
                <div className="checkbox-group">
                  <input type="checkbox" id="terms" name="terms" required />
                  <label htmlFor="terms">I agree to the terms and conditions</label>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="common-btn">Complete Registration</button>
                  <button type="button" className="btn-outline" onClick={() => setShowRegistrationModal(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Back to Events */}
      <section className="back-navigation">
        <div className="container">
          <Link to="/events" className="back-link">
            <i className="lni lni-arrow-left"></i>
            Back to All Events
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventDetail; 