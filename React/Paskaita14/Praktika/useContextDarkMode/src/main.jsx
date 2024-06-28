import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SettingsContextProvider from "./components/Context/SettingsContextProdiver";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </React.StrictMode>
);
