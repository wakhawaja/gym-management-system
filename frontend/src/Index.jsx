import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Select root element
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  // Warn if running in production without StrictMode
  if (process.env.NODE_ENV === "production") {
    console.warn(
      "React StrictMode is disabled in production. Consider enabling it for debugging."
    );
  }
} else {
  console.error(
    "❌ Error: Root element not found. React app failed to initialize."
  );
}
