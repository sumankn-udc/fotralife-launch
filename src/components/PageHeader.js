import React from 'react';

const PageHeader = ({ title, subtitle, backgroundImage = null, children }) => {
  return (
    <div className="page-header">
      <div className="container">
        <div className="page-header-content">
          <div className="section-title">
            <h1 className="wow fadeInUp" data-wow-delay=".2s">
              {title}
            </h1>
            {subtitle && (
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                {subtitle}
              </h2>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 