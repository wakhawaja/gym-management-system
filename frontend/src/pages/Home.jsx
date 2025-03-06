import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/pages/_home.scss";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 300,
  fade: false,
};

const bannerImages = ["gold_spa.jpg", "gold_spa_1.jpg", "gold_spa_2.jpg"];
const imageBasePath = "assets/images/illustrations/gold_spa";

const Home = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Force a resize to recalculate slider dimensions on initial load
    window.dispatchEvent(new Event("resize"));
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0, true);
    }
  }, []);

  return (
    <main className="section-1" aria-label="Welcome to Gold Spa and Fitness Club">
      {/* Banner Section */}
      <section id="banner_section" className="banner-container">
        <Slider {...sliderSettings} className="banner-slider" ref={sliderRef}>
          {bannerImages.map((image, index) => (
            <div key={index} className="banner_image">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={`${imageBasePath}/${image}`}
                />
                <img
                  src={`${imageBasePath}/${image}`}
                  alt="Gold Spa Banner"
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </Slider>
      </section>

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
              <source
                src="assets/videos/promo-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="analytics-section">
        <div className="grid">
          <div className="div1">
            <h1>10+</h1>
            <p>years of experience</p>
          </div>
          <div className="div1">
            <h1>10,000+</h1>
            <p>happy clients</p>
          </div>
          <div className="div1">
            <h1>5+</h1>
            <p>Well Known Trainers</p>
          </div>
          <div className="div1">
            <h1>24/7</h1>
            <p>service</p>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="section-main">
        <div className="container grid grid-two-cols">
          <div className="main-video">
            <video className="promo-video" controls>
              <source
                src="assets/videos/promo-video.mp4"
                type="video/mp4"
              />
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
    </main>
  );
};

export default Home;
