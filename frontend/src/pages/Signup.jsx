import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log("Form Submitted:", formData);
      setTimeout(() => {
        setMessage("Registration successful!");
        navigate("/login");
      }, 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signup-section">
      <div className="container grid grid-two-cols">
        {/* Signup Image */}
        <div className="signup-left">
          <h1 className="signup-heading">Join the Community</h1>
          <ul className="features-list">
            <li>Create and manage your account.</li>
            <li>Stay updated with the latest news.</li>
            <li>Access exclusive content and resources.</li>
          </ul>
          <p className="features-subtext">
            Start your journey today and unlock your potential.
          </p>
        </div>

        {/* Signup Form */}
        <div className="signup-right">
          <div className="signup-header">
            <h1>Create Account</h1>
            <p className="sub-text">Welcome! Please fill in your details.</p>
          </div>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Signup"}
            </button>
          </form>
          {message && <p className="message">{message}</p>}
          <p className="signup-footer">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
