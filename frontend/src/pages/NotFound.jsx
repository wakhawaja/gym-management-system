import React from "react";
import { Link } from "react-router-dom";
import "../scss/pages/_notfound.scss";

const NotFound = () => {
  return (
    <section className="notfound-section">
      <h1 className="notfound-heading">404</h1>
      <p className="notfound-text">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="notfound-btn">Go Back Home</Link>
    </section>
  );
};

export default NotFound;
