import ReactDOM from "react-dom";

import { App } from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  getAuth0Domain,
  getAuth0ClientId,
  getAuth0Audience,
} from "@/environmentVariables";

ReactDOM.render(
  <Auth0Provider
    domain={getAuth0Domain()}
    clientId={getAuth0ClientId()}
    redirectUri={window.location.origin}
    audience={getAuth0Audience()}
    scope="read:current_user read:posts"
  >
    <App></App>
  </Auth0Provider>,
  document.getElementById("root")
);
