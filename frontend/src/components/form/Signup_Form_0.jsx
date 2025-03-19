import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/components/form/_signup_form_0.scss";

const initialFormData = {
  user_name: "",
  email: "",
  phone: "",
  password: "",
};

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  // Auto-clear the message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setMessage("Signup successful!");
        setMessageType("success");
        setFormData(initialFormData);
        // Delay navigation so the user can see the success message
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setMessage(result.message || "Signup failed. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("An error occurred. Please try again later.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-form-wrapper">
      <form onSubmit={handleSubmit} className="form-group">
        <div className="header">
          <h2>Registration Form</h2>
          <p className="sub-text">Welcome! Please fill in your details.</p>
        </div>
        <div className="form-entry">
          <label htmlFor="user_name">Username</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Enter your username"
            value={formData.user_name}
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
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="+92-300-1234567"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-entry">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-button">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Signing Up..." : "Signup"}
          </button>
        </div>
      </form>
      {message && <p className={`message ${messageType}`}>{message}</p>}
      <p className="signup-footer">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignupForm;
