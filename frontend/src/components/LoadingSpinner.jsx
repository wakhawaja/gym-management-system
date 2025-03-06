import "../scss/components/_loadingSpinner.scss";

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner" aria-hidden="true"></div>
    <h2>Loading...</h2>
  </div>
);

export default LoadingSpinner;
