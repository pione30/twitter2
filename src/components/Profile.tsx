import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useApi } from "@/hooks/useApi";
import type { UseApiOptions } from "@/hooks/useApi"; // eslint-disable-line no-unused-vars
import { getAuth0Audience } from "@/environmentVariables";
import LoginButton from "./LoginButton";

const Profile = () => {
  const apiOpts: UseApiOptions = {
    audience: getAuth0Audience(),
    scope: "read:current_user",
  };

  const { user, isAuthenticated, getAccessTokenWithPopup } = useAuth0();
  const { data: myPosts, loading, error, refresh } = useApi(
    `${getAuth0Audience()}/posts/own`,
    apiOpts
  );

  const getTokenAndTryAgain = async () => {
    await getAccessTokenWithPopup(apiOpts);
    refresh();
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    if (error.error === "login_required") {
      return <LoginButton></LoginButton>;
    }
    if (error.error === "consent_required") {
      return (
        <button onClick={getTokenAndTryAgain}>
          Consent to reading current user
        </button>
      );
    }
    return <div>Oops {error.message}</div>;
  }

  // TODO: display myPosts
  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
        </div>
      )}
    </>
  );
};

export default Profile;
