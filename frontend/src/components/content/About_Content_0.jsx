import React from "react";
import { NavLink } from "react-router-dom";
import "../../scss/components/content/_about_content_0.scss";
import aboutImage from "/assets/images/illustrations/login.png"; // Ensure the path is correct

const AboutContent_0 = () => {
  return (
    <section className="section-about">
      <div className="container grid grid-two-cols">
        <div className="about-content">
          <h2 className="about-title">Why Choose Us?</h2>
          <p className="about-subtext">
            <strong>Expertise:</strong> Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
          </p>
          <p className="about-subtext">
            <strong>Customization:</strong> We understand that every business is unique. That’s why we create solutions that are tailored to your specific needs and goals.
          </p>
          <p className="about-subtext">
            <strong>Customer-Centric Approach:</strong> We prioritize your satisfaction and provide top-notch support to address your IT concerns.
          </p>
          <p className="about-subtext">
            <strong>Affordability:</strong> We offer competitive pricing without compromising on quality.
          </p>
          <p className="about-subtext">
            <strong>Reliability:</strong> Count on us to be there when you need us. We’re committed to ensuring your IT environment is reliable and available 24/7.
          </p>
          <div className="btn-group">
            <NavLink to="/contact">
              <button className="btn btn-primary">Connect Now</button>
            </NavLink>
            <NavLink to="/services">
              <button className="btn btn-secondary">Learn More</button>
            </NavLink>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Gold Spa" />
        </div>
      </div>
    </section>
  );
};

export default AboutContent_0;
