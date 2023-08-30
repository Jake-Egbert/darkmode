import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom/client";

import { DarkModeProvider } from "./components/context/DarkModeContext";
import "./styles/main.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
