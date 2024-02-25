import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RandomUserContextProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RandomUserContextProvider>
      <App />
    </RandomUserContextProvider>
  </React.StrictMode>
);
