import React from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import Board from "./App"; // Import the Board component from App.js

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);
