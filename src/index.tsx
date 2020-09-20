import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="development-twitter2-pione30.us.auth0.com"
    clientId="LCMXKOquSdUsVrOvCN05BE0M4yctFuUM"
    redirectUri={window.location.origin}
  >
    <App></App>
  </Auth0Provider>,
  document.getElementById("root")
);
