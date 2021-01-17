import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import { LoginWithRedirectCallback } from "./LoginWithRedirectCallback";

export const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <LoginWithRedirectCallback></LoginWithRedirectCallback>
      ) : (
        <LoginButton></LoginButton>
      )}
    </div>
  );
};
