import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 300, // Adjust as needed
  fade: false,
};

const bannerImages = ["gold_spa.jpg", "gold_spa_1.jpg", "gold_spa_2.jpg"];
const imageBasePath = "assets/images/illustrations/gold_spa";

const Banner = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Trigger a resize event so slider dimensions recalc on load
    window.dispatchEvent(new Event("resize"));
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0, true);
    }
  }, []);

  return (
    <section id="banner_section" className="banner-container">
      <Slider {...sliderSettings} className="banner-slider" ref={sliderRef}>
        {bannerImages.map((image, index) => (
          <div key={index} className="banner-image">
            <picture>
              <source media="(max-width: 767px)" srcSet={`${imageBasePath}/${image}`} />
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
  );
};

export default Banner;
