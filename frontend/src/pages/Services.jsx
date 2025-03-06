import "../scss/pages/_services.scss";

const Services = () => {
  return (
    <main className="section-1">
      {/* Service Content Section */}
      <section className="section-services">
        <div className="container">
          <h1>Our Services</h1>
          <ul className="services-list">
            <li>💪 Personal Training</li>
            <li>🏋️‍♂️ Gym Equipment</li>
            <li>🦌 Yoga & Meditation</li>
            <li>💆 Spa & Wellness</li>
            <li>🍎 Nutrition Planning</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Services;
