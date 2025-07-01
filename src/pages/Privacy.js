import React from 'react';
import PageHeader from '../components/PageHeader';

const Privacy = () => {
  return (
    <div className="main-wrapper demo-06">
      <PageHeader 
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
      />
      
      <section className="privacy-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="privacy-text">
                <div className="section">
                  <h3>Information We Collect</h3>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    register for events, make purchases, or contact us for support.
                  </p>
                </div>
                
                <div className="section">
                  <h3>How We Use Your Information</h3>
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, 
                    process transactions, and communicate with you about events and updates.
                  </p>
                </div>
                
                <div className="section">
                  <h3>Information Sharing</h3>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy.
                  </p>
                </div>
                
                <div className="section">
                  <h3>Data Security</h3>
                  <p>
                    We implement appropriate security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
                
                <div className="section">
                  <h3>Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at 
                    <a href="mailto:privacy@fotralife.com"> privacy@fotralife.com</a>.
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

export default Privacy; 