import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RandomUserContextProvider } from "./context/Context";
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RandomUserContextProvider>
      <App />
    </RandomUserContextProvider> */}
    <App2 />
  </React.StrictMode>
);
