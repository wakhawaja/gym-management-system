import "../scss/pages/_contact.scss";
const Contact = () => {
  return (
    <main className="section-1">
      {/* About Content Section */}
      <section className="section-contact">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions? We&apos;re here to help!</p>
          <p>
            📧 Email:{" "}
            <a href="mailto:support@goldspa.com">support@goldspa.com</a>
          </p>
          <p>📞 Phone: +92-300-1234567</p>
          <p>📍 Address: Gold Spa, Fitness Avenue, City Center</p>
          <div className="social-links">
            <a href="https://facebook.com/goldspa">Facebook</a> |
            <a href="https://instagram.com/goldspa">Instagram</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
