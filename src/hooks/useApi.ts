import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getAuth0Audience, getApiRootEndpoint } from "@/environmentVariables";

export type UseApiOptions = {
  audience?: string;
  scope?: string;
  fetchOptions?: RequestInit;
};

type ApiStates = {
  data?: any;
  error?: any;
  loading: boolean;
};

export const useApi = (path: string, options: UseApiOptions = {}) => {
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState<ApiStates>({
    loading: true,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { audience = getAuth0Audience(), scope, fetchOptions } = options;
        const accessToken = await getAccessTokenSilently({ audience, scope });
        const response = await fetch(`${getApiRootEndpoint()}${path}`, {
          ...fetchOptions,
          headers: {
            ...fetchOptions?.headers,
            Accept: "application/json",
            // Add the Authorization header to the existing headers
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          setState({
            ...state,
            error: {
              message: `HTTP error! status: ${response.status}`,
            },
            loading: false,
          });
          return;
        }

        setState({
          ...state,
          // ignore 204 No Content
          data: response.status !== 204 && (await response.json()),
          error: null,
          loading: false,
        });
      } catch (error) {
        setState({
          ...state,
          error,
          loading: false,
        });
      }
    })();
  }, [getAccessTokenSilently, refreshIndex]);

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1),
  };
};
