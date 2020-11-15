import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import Posts from "./Posts";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Posts></Posts>
          <LogoutButton></LogoutButton>
        </>
      ) : (
        <LoginButton></LoginButton>
      )}
    </div>
  );
};
