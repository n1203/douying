import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles";
import { DataManager } from "./cron";

const Data = new DataManager();
console.log(
  "%cMyProject%cline:7%cData",
  "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
  "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
  "color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px",
  Data
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
