import "../css/LoadingSpinner.css"; // Ensures consistent styling

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <h2>Loading...</h2>
  </div>
);

export default LoadingSpinner;
