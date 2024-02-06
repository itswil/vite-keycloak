import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // NOTE: Move StrictMode INSIDE AuthProvider
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);
