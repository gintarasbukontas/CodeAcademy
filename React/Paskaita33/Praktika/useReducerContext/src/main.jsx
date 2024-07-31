import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ColorPalleteProvider } from "./context/ColorPalleteProvider/ColorPalleteProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorPalleteProvider>
      <App />
    </ColorPalleteProvider>
  </React.StrictMode>
);
