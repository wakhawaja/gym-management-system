import { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "./LoadingSpinner";

// Lazy-loaded components for performance
const Navbar = lazy(() => import("./Navbar"));
const Footer = lazy(() => import("./Footer"));

const Layout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
      </Suspense>
      <main className="content">{children}</main>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
};

// ✅ Add PropTypes validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
