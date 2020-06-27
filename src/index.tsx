import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/app";

ReactDOM.render(
  <App compiler="TypeScript" framework="React"></App>,
  document.getElementById("root")
);
