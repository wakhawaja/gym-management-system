import React, { lazy, Suspense } from "react";
import "../scss/pages/_home.scss";

const Banner = lazy(() => import("../components/Banner"));
const Analytics = lazy(() => import("../components/Analytics"));

const Home = () => {
  return (
    <section className="home-section" aria-label="Welcome to Gold Spa and Fitness Club">

      {/* Banner Section */}
      <Suspense fallback={<div>Loading Analytics...</div>}>
        <Banner />
      </Suspense>

      {/* Main Content Section */}
      <section className="section-main">
        <div className="container grid grid-two-cols">
          <div className="main-content">
            <p className="about-subtext">We are the best SPA in town</p>
            <h2 className="about-title">
              Welcome to GOLD Spa and Fitness Club
            </h2>
            <p className="about-subtext">
              Your ultimate destination for relaxation and fitness.
            </p>
            <p className="about-subtext">
              Track your fitness goals and manage your journey effortlessly.
            </p>
            <div className="btn-group">
              <a href="/signup">
                <button className="btn btn-primary">Join Now</button>
              </a>
              <a href="/about">
                <button className="btn btn-secondary">Learn More</button>
              </a>
            </div>
          </div>
          <div className="main-video">
            <video className="promo-video" controls>
              <source src="assets/videos/promo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <Suspense fallback={<div>Loading Analytics...</div>}>
        <Analytics />
      </Suspense>

      {/* Additional Content Section */}
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
              <a href="/signup">
                <button className="btn btn-primary">Join Now</button>
              </a>
              <a href="/about">
                <button className="btn btn-secondary">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
