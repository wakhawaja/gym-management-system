import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import "../scss/layout/_layout.scss";
import LoadingSpinner from "./LoadingSpinner";

const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));

const Layout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      <main >{children}</main>
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
