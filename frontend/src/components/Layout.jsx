import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "./LoadingSpinner";

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
