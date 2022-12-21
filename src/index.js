import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TransactionsProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </TransactionsProvider>
);
