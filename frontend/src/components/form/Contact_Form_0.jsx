import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/components/form/_contact_Form_0.scss";

const Contact_Form_0 = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact us...", formData);
    // // Simulate API call or processing
    // setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <section className="contact-form-wrapper">
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
  );
};

export default Contact_Form_0;
