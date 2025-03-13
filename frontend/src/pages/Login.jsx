import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../scss/pages/_login.scss";

const SocialLoginButton = ({ href, imgSrc, altText, children }) => (
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

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in...", formData);
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <section className="login-section">
      <div className="login-container grid grid-two-cols">
        <div className="login-message">
          <h1 className="login-heading">Explore Your Creativity</h1>
          <ul className="features-list">
            <li>Bookmark your readings.</li>
            <li>Comment on your favorite posts.</li>
            <li>Register for upcoming contests.</li>
          </ul>
          <p className="features-subtext">
            Access your dashboard and much more.
          </p>
        </div>

        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="form-group">
            <div className="header">
              <h2>Login Form</h2>
              <p className="sub-text">
                Welcome back. Please enter your details.
              </p>
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
      </div>
    </section>
  );
};

export default Login;
