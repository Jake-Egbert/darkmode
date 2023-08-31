import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom/client";

import { LanguageProvider } from "./components/context/LanguageContext";
import { DarkModeProvider } from "./components/context/DarkModeContext";
import "./styles/main.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
