import React, { useState } from 'react';
import { trackEvent } from '../components/Analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "info@fotralife.com",
      description: "For general inquiries and support"
    },
    {
      icon: "📱",
      title: "Call Us",
      details: "+91 98765 43210",
      description: "Available Mon-Sat, 9 AM - 7 PM"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Bangalore, Karnataka",
      description: "Part of Undash-cop Pvt Ltd"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "+91 98765 43210",
      description: "Quick responses for urgent queries"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'event', label: 'Event Registration' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'support', label: 'Customer Support' },
    { value: 'feedback', label: 'Feedback' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    trackEvent('contact_form_submit', {
      inquiry_type: formData.inquiryType,
      subject: formData.subject,
      section: 'contact_form'
    });

    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  return (
    <div className="main-wrapper demo-06">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header-content text-center">
                <h1 className="text-white wow fadeInUp" data-wow-delay=".2s">
                  Get In Touch
                </h1>
                <p className="text-white wow fadeInUp" data-wow-delay=".4s">
                  We're here to help with all your adventure needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">How to Reach Us</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Multiple ways to connect with our team
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="contact-card wow fadeInUp" data-wow-delay={`.${index + 2}s`}>
                  <div className="contact-icon">{info.icon}</div>
                  <h4>{info.title}</h4>
                  <p className="contact-details">{info.details}</p>
                  <p className="contact-description">{info.description}</p>
                  {info.title === "Email Us" && (
                    <a 
                      href={`mailto:${info.details}`}
                      className="contact-action"
                      onClick={() => trackEvent('contact_method_click', {
                        method: 'email',
                        section: 'contact_info'
                      })}
                    >
                      Send Email
                    </a>
                  )}
                  {info.title === "Call Us" && (
                    <a 
                      href={`tel:${info.details}`}
                      className="contact-action"
                      onClick={() => trackEvent('contact_method_click', {
                        method: 'phone',
                        section: 'contact_info'
                      })}
                    >
                      Call Now
                    </a>
                  )}
                  {info.title === "WhatsApp" && (
                    <a 
                      href={`https://wa.me/919876543210`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-action"
                      onClick={() => trackEvent('contact_method_click', {
                        method: 'whatsapp',
                        section: 'contact_info'
                      })}
                    >
                      Message on WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="contact-form-wrapper wow fadeInUp" data-wow-delay=".2s">
                <div className="form-header text-center">
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you as soon as possible</p>
                </div>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required 
                          placeholder="Enter your full name" 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email Address *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                          placeholder="Enter your email" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number" 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Inquiry Type</label>
                        <select 
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Subject *</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required 
                      placeholder="What's this about?" 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                      rows="6" 
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <div className="form-submit text-center">
                    <button type="submit" className="common-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Quick Actions</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Need something specific? Try these quick links
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="action-card wow fadeInUp" data-wow-delay=".2s">
                <div className="action-icon">🎪</div>
                <h4>Event Support</h4>
                <p>Questions about existing bookings or event details</p>
                <button 
                  className="action-btn"
                  onClick={() => {
                    trackEvent('quick_action_click', {
                      action: 'event_support',
                      section: 'quick_actions'
                    });
                    alert('Please email us at events@fotralife.com or call our support line.');
                  }}
                >
                  Get Help
                </button>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="action-card wow fadeInUp" data-wow-delay=".3s">
                <div className="action-icon">🤝</div>
                <h4>Partnership</h4>
                <p>Interested in collaborating or business partnerships</p>
                <button 
                  className="action-btn"
                  onClick={() => {
                    trackEvent('quick_action_click', {
                      action: 'partnership',
                      section: 'quick_actions'
                    });
                    setFormData({...formData, inquiryType: 'partnership', subject: 'Partnership Inquiry'});
                    document.querySelector('.contact-form-section').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Partner With Us
                </button>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="action-card wow fadeInUp" data-wow-delay=".4s">
                <div className="action-icon">🛒</div>
                <h4>Order Support</h4>
                <p>Help with orders, shipping, or product inquiries</p>
                <button 
                  className="action-btn"
                  onClick={() => {
                    trackEvent('quick_action_click', {
                      action: 'order_support',
                      section: 'quick_actions'
                    });
                    alert('For order support, please email shop@fotralife.com with your order number.');
                  }}
                >
                  Order Help
                </button>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="action-card wow fadeInUp" data-wow-delay=".5s">
                <div className="action-icon">💡</div>
                <h4>Feedback</h4>
                <p>Share your experience or suggest improvements</p>
                <button 
                  className="action-btn"
                  onClick={() => {
                    trackEvent('quick_action_click', {
                      action: 'feedback',
                      section: 'quick_actions'
                    });
                    setFormData({...formData, inquiryType: 'feedback', subject: 'Feedback & Suggestions'});
                    document.querySelector('.contact-form-section').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Share Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Quick answers to common questions
                </h2>
              </div>
              
              <div className="faq-list wow fadeInUp" data-wow-delay=".4s">
                <div className="faq-item">
                  <h5>How do I register for an event?</h5>
                  <p>Visit our Events page, choose your adventure, and click "Register Now". You'll receive confirmation details via email.</p>
                </div>
                
                <div className="faq-item">
                  <h5>What's included in the event price?</h5>
                  <p>Each event page lists what's included. Generally, it covers accommodation, meals, guide services, and permits where applicable.</p>
                </div>
                
                <div className="faq-item">
                  <h5>Can beginners join the events?</h5>
                  <p>Absolutely! We have events for all skill levels. Check the difficulty level on each event - we offer "Easy" level events perfect for beginners.</p>
                </div>
                
                <div className="faq-item">
                  <h5>What's your cancellation policy?</h5>
                  <p>Cancellations made 7+ days before the event get a full refund. 3-7 days: 50% refund. Less than 3 days: no refund (except emergencies).</p>
                </div>
                
                <div className="faq-item">
                  <h5>Do you provide equipment?</h5>
                  <p>Basic safety equipment is provided. Personal gear like clothing and shoes should be brought by participants. Check our shop for recommended gear.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="office-hours">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mx-auto text-center">
              <div className="hours-content wow fadeInUp" data-wow-delay=".2s">
                <h2 className="text-white">Our Office Hours</h2>
                <div className="hours-grid">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
                <p className="hours-note">
                  For urgent matters outside office hours, reach us on WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 