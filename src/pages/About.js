import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { trackEvent } from '../components/Analytics';

const About = () => {
  const teamMembers = [
    {
      name: "Abhiste Shobite Prasanakshi",
      role: "Founder",
      image: "assets/img/abhiste-founder.jpg",
      bio: "Passionate founder with diverse interests in food blogging, traveling, and artistic expression. Brings creativity and vision to every Fotralife adventure.",
      expertise: ["Food Blogging", "Travel Photography", "Artistic Direction", "Creative Leadership"]
    },
    {
      name: "Suman KN", 
      role: "Co-Founder / Business Operations",
      image: "assets/img/suman-cofounder.jpg",
      bio: "Leading biking and trek events while managing community operations. Ensures every adventure runs smoothly and safely.",
      expertise: ["Event Leadership", "Biking Expeditions", "Trek Management", "Operations", "Adventure Photography"]
    },
    {
      name: "Prathapa",
      role: "Lead Guide",
      image: "assets/img/prathapa-guide.jpg", 
      bio: "Expert guide for biking and trekking adventures, also a passionate content creator sharing the beauty of outdoor experiences.",
      expertise: ["Biking Expeditions", "Trekking Guides", "Content Creation", "Adventure Photography"]
    },
    {
      name: "Yashwanth",
      role: "Event Manager / Lead Guide",
      image: "assets/img/yashwanth-manager.jpg",
      bio: "Specializes in biking adventures and event management, with a passion for discovering and exploring hidden gems across India.",
      expertise: ["Event Management", "Hidden Destinations", "Biking Adventures", "Route Discovery"]
    },
    {
      name: "Karthik",
      role: "UI/UX Designer / Lead Guide",
      image: "assets/img/karthik-designer.jpg", 
      bio: "Combines technical expertise in design and coding with adventure leadership for biking and trekking expeditions.",
      expertise: ["UI/UX Design", "Coding", "Biking Guide", "Technical Leadership"]
    }
  ];

  const achievements = [
    { number: "100+", label: "Happy Adventurers", icon: "😊" },
    { number: "50+", label: "Successful Expeditions", icon: "🏔️" },
    { number: "10+", label: "States Explored", icon: "🗺️" },
    { number: "10000+", label: "Kilometers Covered", icon: "🚴‍♂️" },
    { number: "5", label: "Years of Excellence", icon: "🏆" },
    { number: "99%", label: "Safety Record", icon: "🛡️" }
  ];

  const values = [
    {
      title: "Safety First",
      description: "Every expedition is planned with safety as our top priority, with trained guides and emergency protocols.",
      icon: "🛡️"
    },
    {
      title: "Community Spirit", 
      description: "We believe in building lasting friendships and connections through shared adventure experiences.",
      icon: "🤝"
    },
    {
      title: "Sustainable Tourism",
      description: "We promote responsible travel that preserves nature and supports local communities.",
      icon: "🌱"
    },
    {
      title: "Expert Guidance",
      description: "Our experienced guides ensure you have the best possible adventure while learning about the destinations.",
      icon: "🎯"
    }
  ];

  return (
    <div className="main-wrapper demo-06">
      {/* Page Header */}
      <PageHeader 
        title="About Fotralife"
        subtitle="Your trusted partner in adventure travel and exploration"
      />

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="story-content wow fadeInLeft" data-wow-delay=".2s">
                <div className="section-title">
                  <h1>Our Story</h1>
                  <h2>Born from a Passion for Adventure</h2>
                </div>
                <p>
                  Fotralife began as a simple idea among friends who shared an insatiable love for adventure. 
                  What started as weekend bike rides and occasional treks has evolved into a thriving community 
                  of over 500 adventure enthusiasts.
                </p>
                <p>
                  Founded in 2019, we recognized the need for organized, safe, and memorable adventure experiences 
                  that bring people together. Today, we're proud to be part of the Undash-cop family, continuing 
                  our mission to make adventure accessible to everyone.
                </p>
                <div className="story-highlights">
                  <div className="highlight-item">
                    <span className="year">2021</span>
                    <span className="milestone">Founded</span>
                  </div>
                  <div className="highlight-item">
                    <span className="year">100+</span>
                    <span className="milestone">Members</span>
                  </div>
                  <div className="highlight-item">
                    <span className="year">10+</span>
                    <span className="milestone">Adventures</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story-image wow fadeInRight" data-wow-delay=".4s">
                <img src="assets/img/group-adventure.jpg" alt="Fotralife Adventure Group" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mission-card wow fadeInUp" data-wow-delay=".2s">
                <div className="card-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To create unforgettable adventure experiences that bring people together, 
                  promote physical and mental well-being, and foster a deep connection with nature 
                  while maintaining the highest standards of safety and sustainability.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision-card wow fadeInUp" data-wow-delay=".4s">
                <div className="card-icon">👁️</div>
                <h3>Our Vision</h3>
                <p>
                  To become India's most trusted adventure community, inspiring thousands to 
                  step out of their comfort zones, explore the incredible beauty of our country, 
                  and build lifelong memories and friendships through shared adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Our Values</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  The principles that guide every adventure
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            {values.map((value, index) => (
              <div key={index} className="col-lg-6 col-xl-3">
                <div className="value-card wow fadeInUp" data-wow-delay={`.${index + 2}s`}>
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Our Achievements</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Numbers that speak of our commitment
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            {achievements.map((achievement, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="achievement-card wow fadeInUp" data-wow-delay={`.${index % 3 + 2}s`}>
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3>{achievement.number}</h3>
                  <p>{achievement.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Meet Our Team</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  The passionate individuals behind every adventure
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="team-card wow fadeInUp" data-wow-delay={`.${index + 2}s`}>
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-content">
                    <h4>{member.name}</h4>
                    <span className="team-role">{member.role}</span>
                    <p className="team-bio">{member.bio}</p>
                    <div className="team-expertise">
                      <h6>Expertise:</h6>
                      <ul>
                        {member.expertise.map((skill, idx) => (
                          <li key={idx}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="join-cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto text-center">
              <div className="cta-content wow fadeInUp" data-wow-delay=".2s">
                <h2 className="text-white">Ready to Be Part of Our Story?</h2>
                <p className="text-white">
                  Join the Fotralife community and start creating your own adventure stories. 
                  Whether you're a beginner or an experienced adventurer, there's a place for you in our family.
                </p>
                <div className="cta-buttons">
                  <Link 
                    to="/community" 
                    className="common-btn"
                    onClick={() => trackEvent('cta_click', {
                      button: 'join_community',
                      section: 'about_cta'
                    })}
                  >
                    Join Our Community
                  </Link>
                  <Link 
                    to="/events" 
                    className="common-btn btn-outline"
                    onClick={() => trackEvent('cta_click', {
                      button: 'view_events',
                      section: 'about_cta'
                    })}
                  >
                    View Events
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

export default About; 