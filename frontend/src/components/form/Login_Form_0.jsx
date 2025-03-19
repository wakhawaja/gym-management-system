import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/components/form/_login_form_0.scss";

export const SocialLoginButton = ({ href, imgSrc, altText, children }) => (
  <a href={href} className="btn btn-social" aria-label={altText}>
    <img src={imgSrc} alt={altText} />
    {children}
  </a>
);

SocialLoginButton.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Login_Form_0 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    console.log("Logging in...", formData);
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <div className="login-form-wrapper">
      <form onSubmit={handleSubmit} className="form-group">
        <div className="header">
          <h2>Login Form</h2>
          <p className="sub-text">Welcome back. Please enter your details.</p>
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <a href="/forgot-password" className="forgot-password">
        Forgot Password?
      </a>
      <hr className="divider" />
      <div className="social-login">
        <SocialLoginButton
          href="/auth/github"
          imgSrc="/assets/images/icons/github.png"
          altText="Sign in with GitHub"
        >
          Sign in with GitHub
        </SocialLoginButton>
        <SocialLoginButton
          href="/auth/google"
          imgSrc="/assets/images/icons/google.png"
          altText="Sign in with Google"
        >
          Sign in with Google
        </SocialLoginButton>
      </div>
      <p className="signup-link">
        Don&apos;t have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
};

export default Login_Form_0;
