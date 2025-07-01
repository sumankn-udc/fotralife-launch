import React from 'react';
import PageHeader from '../components/PageHeader';

const Privacy = () => {
  return (
    <div className="main-wrapper demo-06">
      <PageHeader 
        title="Privacy Policy"
        subtitle="Your privacy is important to us"
      />

      <section className="privacy-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="privacy-text">
                <div className="section">
                  <h3>Information We Collect</h3>
                  <p>
                    When you register for our events, join our community, or make purchases, we collect information such as your name, email address, phone number, and emergency contact details to ensure your safety and provide you with the best adventure experience.
                  </p>
                </div>

                <div className="section">
                  <h3>How We Use Your Information</h3>
                  <p>
                    We use your personal information to:
                  </p>
                  <ul>
                    <li>Process event registrations and payments</li>
                    <li>Communicate important safety and event updates</li>
                    <li>Provide customer support</li>
                    <li>Send newsletters and promotional content (with your consent)</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                </div>

                <div className="section">
                  <h3>Data Protection</h3>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and we never sell your information to third parties.
                  </p>
                </div>

                <div className="section">
                  <h3>Cookies</h3>
                  <p>
                    Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div className="section">
                  <h3>Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@fotralife.com">privacy@fotralife.com</a>
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

export default Privacy; 