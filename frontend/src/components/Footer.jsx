import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Gold Spa. All Rights Reserved.</p>
      <nav aria-label="Footer Navigation">
        <a href="/privacy-policy" rel="noopener noreferrer">
          Privacy Policy
        </a>
        <a href="/terms-of-service" rel="noopener noreferrer">
          Terms of Service
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
