const Home = () => (
  <main className="home-section" aria-label="Welcome to Gold Spa">
    <div className="home-container">
      <h1>Welcome to Gold Spa</h1>
      <p>Track your fitness goals and manage your journey effortlessly.</p>

      <video className="promo-video" controls>
        <source src="/videos/promo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag. Please update your browser.
      </video>

      <a href="/signup" className="btn btn-primary">
        Join Now
      </a>
    </div>
  </main>
);

export default Home;
