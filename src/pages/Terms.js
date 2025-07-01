import React from 'react';
import PageHeader from '../components/PageHeader';

const Terms = () => {
  return (
    <div className="main-wrapper demo-06">
      <PageHeader 
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services"
      />

      <section className="privacy-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="privacy-text">
                <div className="section">
                  <h3>Acceptance of Terms</h3>
                  <p>
                    By accessing and using Fotralife's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div className="section">
                  <h3>Event Registration and Participation</h3>
                  <ul>
                    <li>Participants must be in good physical health and disclose any medical conditions</li>
                    <li>Age restrictions may apply to certain events</li>
                    <li>Full payment is required to confirm your registration</li>
                    <li>Participants must follow all safety guidelines and instructions from guides</li>
                    <li>Fotralife reserves the right to cancel events due to weather or safety concerns</li>
                  </ul>
                </div>

                <div className="section">
                  <h3>Cancellation and Refund Policy</h3>
                  <p>
                    Cancellations made 7 days or more before the event start date are eligible for a full refund. Cancellations made within 7 days of the event may incur a cancellation fee. Refunds for cancelled events due to weather or safety reasons will be processed within 5-7 business days.
                  </p>
                </div>

                <div className="section">
                  <h3>Liability and Risk</h3>
                  <p>
                    Adventure activities involve inherent risks. Participants engage in activities at their own risk. Fotralife provides professional guides and safety equipment, but cannot guarantee against all risks associated with outdoor activities. Travel insurance is strongly recommended.
                  </p>
                </div>

                <div className="section">
                  <h3>Code of Conduct</h3>
                  <p>
                    Participants are expected to:
                  </p>
                  <ul>
                    <li>Respect fellow participants, guides, and local communities</li>
                    <li>Follow Leave No Trace principles</li>
                    <li>Not engage in activities under the influence of alcohol or drugs</li>
                    <li>Respect wildlife and natural environments</li>
                  </ul>
                </div>

                <div className="section">
                  <h3>Intellectual Property</h3>
                  <p>
                    All content on the Fotralife website, including text, images, logos, and designs, is the property of Fotralife and is protected by copyright laws.
                  </p>
                </div>

                <div className="section">
                  <h3>Contact Information</h3>
                  <p>
                    For questions about these Terms of Service, contact us at <a href="mailto:legal@fotralife.com">legal@fotralife.com</a>
                  </p>
                </div>

                <div className="section">
                  <p><em>Last updated: January 2025</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms; 