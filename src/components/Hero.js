import React from 'react';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <div className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="heading">
              <h1 className="text-white wow fadeInUp" data-wow-delay=".2s">
                We Are <br /> Coming Soon
              </h1>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="wow fadeInRight" data-wow-delay=".4s">
              <Countdown />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <p className="wow fadeInLeft" data-wow-delay=".4s">
              We're strong believers that the best solutions come from gathering new insights and pushing conventional boundaries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 