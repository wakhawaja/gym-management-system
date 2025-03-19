import React from "react";
import { NavLink } from "react-router-dom";
import "../../scss../../scss/components/content/_home_content_1.scss";

const Home_Content_1 = () => {
  return (
    <section className="section-main reverse">
      <div className="container grid grid-two-cols">
        <div className="main-video">
          <video className="promo-video" controls>
            <source src="assets/videos/promo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="main-content">
          <p className="about-subtext">We are the best SPA in town</p>
          <h2 className="about-title">Discover More About Us</h2>
          <p className="about-subtext">
            Your ultimate destination for relaxation and fitness.
          </p>
          <p className="about-subtext">
            Track your fitness goals and manage your journey effortlessly.
          </p>
          <div className="btn-group">
            <NavLink to="/signup">
              <button className="btn btn-primary">Join Now</button>
            </NavLink>
            <NavLink to="/about">
              <button className="btn btn-secondary">Learn More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Content_1;
