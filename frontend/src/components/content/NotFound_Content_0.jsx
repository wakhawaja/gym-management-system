import React from "react";
import { NavLink } from "react-router-dom";
import "../../scss/components/content/_notFound_content_0.scss";

const NotFoundContent = () => {
  return (
    <>
      <div className="notfound-content">
        <h1 className="notfound-heading">404</h1>
        <p className="notfound-text">
          Oops! The page you are looking for does not exist.
        </p>
      </div>
      <div className="notfound-actions">
        <NavLink to="/" className="notfound-btn">
          Home
        </NavLink>
        <NavLink to="/contact" className="notfound-btn">
          Report problem
        </NavLink>
      </div>
    </>
  );
};

export default NotFoundContent;
