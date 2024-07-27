import React from "react";
import "./css/index.css";

import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./css/index.css";

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
