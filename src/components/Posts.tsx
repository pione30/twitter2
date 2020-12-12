import { useAuth0 } from "@auth0/auth0-react";
import { useApi, UseApiOptions } from "@/hooks/useApi"; // eslint-disable-line no-unused-vars
import { formatDate } from "@/helpers";
import LoginButton from "./LoginButton";

interface Post {
  id: string;
  body: string;
  created_at: string;
}

const Posts = () => {
  const apiOpts: UseApiOptions = {
    scope: "read:users read:posts",
  };

  const { user, isAuthenticated, getAccessTokenWithPopup } = useAuth0();
  const { data: myPosts, loading, error, refresh } = useApi(
    `/posts/own`,
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
          Consent to reading current user and posts
        </button>
      );
    }
    return <div>Oops {error.message}</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <div>
            Your posts:
            <ul>
              {(myPosts as Array<Post>).map((post) => (
                <li key={post.id}>
                  {post.body}
                  <p>({formatDate(post.created_at)})</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Posts;
