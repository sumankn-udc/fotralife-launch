import React from 'react';

const PageHeader = ({ title, subtitle, children }) => {
  return (
    <section className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-header-content text-center">
              <h1 className="text-white wow fadeInUp" data-wow-delay=".2s">
                {title}
              </h1>
              <p className="text-white wow fadeInUp" data-wow-delay=".4s">
                {subtitle}
              </p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader; 