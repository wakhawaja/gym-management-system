import "../scss/components/_footer.scss";

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <p>&copy; {new Date().getFullYear()} Gold Spa. All Rights Reserved.</p>
    <nav aria-label="Footer Navigation" className="footer-nav">
      <ul>
        <li>
          <a href="/privacy-policy" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/terms-of-service" rel="noopener noreferrer">
            Terms of Service
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
