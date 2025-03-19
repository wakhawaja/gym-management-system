import React, { lazy, Suspense } from "react";
import AboutContent from "../components/content/About_Content_0";
const Analytics = lazy(() => import("../components/Analytics"));

const About = () => {
  return (
    <section className="about-section" aria-label="About Gold Spa">

      {/* Main Content Section */}
      <AboutContent />
      
      {/* Analytics Section */}
      <Suspense fallback={<div>Loading Analytics...</div>}>
        <Analytics />
      </Suspense>
    </section>
  );
};

export default About;
