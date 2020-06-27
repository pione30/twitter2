import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="pione30.us.auth0.com"
    clientId="9y8ASx6sqghDBQEN8d9x4AwT7qvbsjra"
    redirectUri={window.location.origin}
  >
    <App compiler="TypeScript" framework="React"></App>,
  </Auth0Provider>,
  document.getElementById("root")
);
