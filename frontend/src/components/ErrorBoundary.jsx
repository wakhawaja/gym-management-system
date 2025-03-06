import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Optionally report error to an external service here.
  }

  handleRetry = () => {
    // Optionally clear any caches/state before reload
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="error-boundary"
          style={{ textAlign: "center", padding: "2rem" }}
        >
          <h1>Oops! Something went wrong.</h1>
          <p>Please refresh the page or contact support.</p>
          <button onClick={this.handleRetry} className="btn btn-primary">
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
