import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import { getAuth0Domain, getAuth0ClientId } from "@/environmentVariables";

ReactDOM.render(
  <Auth0Provider
    domain={getAuth0Domain()}
    clientId={getAuth0ClientId()}
    redirectUri={window.location.origin}
  >
    <App></App>
  </Auth0Provider>,
  document.getElementById("root")
);
