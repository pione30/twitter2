import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import Profile from "./Profile";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Profile></Profile>
          <LogoutButton></LogoutButton>
        </>
      ) : (
        <LoginButton></LoginButton>
      )}
    </div>
  );
};
