import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.AUTH0_DOMAIN as string}
    clientId={process.env.AUTH0_CLIENT_ID as string}
    redirectUri={window.location.origin}
  >
    <App></App>
  </Auth0Provider>,
  document.getElementById("root")
);
