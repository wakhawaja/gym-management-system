import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../scss/components/_header.scss";

// Define navigation links outside the component since they are constant
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/blogs", label: "Blogs" },
  { path: "/contact", label: "Contact" },
  { path: "/login", label: "Login" },
  { path: "/signup", label: "Signup" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header-container ${scrolled ? "scrolled" : ""}`}>
      <NavLink to="/" className="brand-container" onClick={closeMenu}>
        <img
          src="/assets/images/logos/goldspa-logo.png"
          alt="Gold Spa Logo"
          className="site-logo"
        />
        <div className="site-name">
          <span>Gold</span>
          <span className="color-primary">Spa</span>
        </div>
      </NavLink>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        aria-label="Toggle Navigation Menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        className={`nav-menu ${menuOpen ? "active" : ""}`}
        aria-label="Main Navigation"
      >
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

export default Header;
