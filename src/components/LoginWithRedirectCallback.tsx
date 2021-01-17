import { useApi } from "@/hooks/useApi";
import { ApiResultHandler } from "@/components/helpers/ApiResultHandler";
import Posts from "./Posts";
import LogoutButton from "./LogoutButton";

export const LoginWithRedirectCallback = () => {
  const apiOptions = {
    scope: "write:users",
    fetchOptions: {
      method: "PUT",
    },
  };

  const { loading, error, refresh } = useApi("/users", apiOptions);

  return (
    <ApiResultHandler
      loading={loading}
      error={error}
      refresh={refresh}
      scope={apiOptions.scope}
    >
      <Posts></Posts>
      <LogoutButton></LogoutButton>
    </ApiResultHandler>
  );
};
