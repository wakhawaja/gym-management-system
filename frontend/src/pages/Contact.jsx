import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/pages/_contact.scss";
import contactImage from "/assets/images/illustrations/support.png"; // Ensure correct image path

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Contact us...", formData);
    // Simulate API call or processing
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <section className="contact-us-section">
      <h2 className="contact-us-heading">Contact Us</h2>

      <div className="contact-us-container grid grid-two-cols">
        <div className="contact-us-image">
          <img src={contactImage} alt="Contact Us Gold Spa" />
        </div>

        <section className="contact-form-container">
          <form onSubmit={handleSubmit} className="form-group">
            <div className="form-entry">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-entry">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-entry">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={6}
                cols={30}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-button">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>

      <section className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11467.772798356624!2d74.37047654999999!3d31.4661513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919066888d233a7%3A0x907b9a4ede569120!2sPunjab%20Co-Operative%20Housing%20Society%2C%20Lahore%2C%20Pakistan!5e1!3m2!1sen!2s!4v1741827996438!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  );
};

export default Contact;
