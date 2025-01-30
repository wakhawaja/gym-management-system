import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
  ];

  return (
    <header className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <a href="/" className="brand-container">
        <img
          src="./images/logos/goldspa-logo.png"
          alt="Gold Spa Logo"
          className="site-logo"
        />
        <div className="site-name">
          <span>Gold</span>
          <span className="color-primary">Spa</span>
        </div>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        aria-label="Toggle Navbar"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
