import React from 'react';
import PageHeader from '../components/PageHeader';

const Terms = () => {
  return (
    <div className="main-wrapper demo-06">
      <PageHeader 
        title="Terms of Service"
        subtitle="Terms and conditions for using Fotralife services"
      />
      
      <section className="terms-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="terms-text">
                <div className="section">
                  <h3>Acceptance of Terms</h3>
                  <p>
                    By accessing and using Fotralife services, you accept and agree to be bound 
                    by the terms and provision of this agreement.
                  </p>
                </div>
                
                <div className="section">
                  <h3>Event Participation</h3>
                  <p>
                    Participation in Fotralife events is at your own risk. We recommend appropriate 
                    fitness levels and safety precautions for all activities.
                  </p>
                </div>
                
                <div className="section">
                  <h3>Cancellation Policy</h3>
                  <ul>
                    <li>Cancellations 7+ days before: Full refund</li>
                    <li>Cancellations 3-7 days before: 50% refund</li>
                    <li>Cancellations less than 3 days: No refund (except emergencies)</li>
                  </ul>
                </div>
                
                <div className="section">
                  <h3>Liability</h3>
                  <p>
                    Fotralife and its organizers are not liable for any injuries, damages, or losses 
                    that may occur during events or activities.
                  </p>
                </div>
                
                <div className="section">
                  <h3>Contact Information</h3>
                  <p>
                    For questions about these terms, contact us at 
                    <a href="mailto:legal@fotralife.com"> legal@fotralife.com</a>.
                  </p>
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