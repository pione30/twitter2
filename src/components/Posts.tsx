import { useAuth0 } from "@auth0/auth0-react";
import { useApi } from "@/hooks/useApi";
import { formatDate } from "@/helpers";
import { getAuth0Audience } from "@/environmentVariables";
import { ApiResultHandler } from "@/components/helpers/ApiResultHandler";

interface Post {
  id: string;
  body: string;
  created_at: string;
}

const Posts = () => {
  const { user } = useAuth0();

  const useApiOptions = {
    scope: "read:users read:posts",
  };
  const { data: myPosts, loading, error, refresh } = useApi(
    `/posts/own`,
    useApiOptions
  );

  return (
    <ApiResultHandler
      loading={loading}
      error={error}
      refresh={refresh}
      scope={useApiOptions.scope}
    >
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <div>
          Your posts:
          <ul>
            {(myPosts as Array<Post> | undefined)?.map((post) => (
              <li key={post.id}>
                {post.body}
                <p>({formatDate(post.created_at)})</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ApiResultHandler>
  );
};

export default Posts;
