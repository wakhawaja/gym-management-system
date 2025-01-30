import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="not-found-section" aria-label="Page Not Found">
      <h1>404 - Page Not Found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="btn btn-primary">Go Back Home</Link>
    </main>
  );
};

export default NotFound;
