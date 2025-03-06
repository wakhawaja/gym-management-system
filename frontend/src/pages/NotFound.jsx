import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="section-1">
      <h1 className="notfound-heading">404</h1>
      <p className="notfound-text">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="notfound-btn">Go Back Home</Link>
    </section>
  );
};

export default NotFound;
