import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <Ai><App /></Ai>
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);