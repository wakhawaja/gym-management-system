import React, { lazy, Suspense } from "react";
import Home_Content_0 from "../components/content/Home_Content_0";
import Home_Content_1 from "../components/content/Home_Content_1";

const Banner = lazy(() => import("../components/Banner"));
const Analytics = lazy(() => import("../components/Analytics"));

const Home = () => {
  return (
    <section className="main-section" aria-label="Welcome to Gold Spa and Fitness Club">
      {/* Banner Section */}
      <Suspense fallback={<div>Loading Banner...</div>}>
        <Banner />
      </Suspense>

      {/* Main Content Section */}
      <Home_Content_0 />

      {/* Analytics Section */}
      <Suspense fallback={<div>Loading Analytics...</div>}>
        <Analytics />
      </Suspense>

      {/* Additional Content Section (Reversed) */}
      <Home_Content_1 />
    </section>
  );
};

export default Home;
