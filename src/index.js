// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import Tailwind CSS
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
