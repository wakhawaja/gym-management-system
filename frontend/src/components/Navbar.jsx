import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="logo-brand" onClick={closeMenu}>
          Gym Management
        </NavLink>
      </div>
      <div className="navbar-right">
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                exact
                to={path}
                activeClassName="active"
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
