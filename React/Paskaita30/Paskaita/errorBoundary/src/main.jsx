import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import errorFallbackComponent from "./components/ErrorFallbackComponent/ErrorFallbackComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={errorFallbackComponent}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
