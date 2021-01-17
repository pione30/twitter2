import { useAuth0 } from "@auth0/auth0-react";
import { ApiStates } from "@/hooks/useApi";
import LoginButton from "@/components/LoginButton";

interface Props extends Omit<ApiStates, "data"> {
  refresh: () => void;
  scope: string;
  children?: React.ReactNode;
}

export const ApiResultHandler: React.FC<Props> = (props: Props) => {
  const { getAccessTokenWithPopup } = useAuth0();

  const getTokenAndTryAgain = async () => {
    await getAccessTokenWithPopup({ scope: props.scope });
    props.refresh();
  };

  if (props.loading) {
    return <div>Loading...</div>;
  }
  if (props.error) {
    if (props.error.error === "login_required") {
      return <LoginButton></LoginButton>;
    }
    if (props.error.error === "consent_required") {
      return (
        <button onClick={getTokenAndTryAgain}>
          Consent to reading current user and posts
        </button>
      );
    }
    return <div>Oops {props.error.message}</div>;
  }

  return <>{props.children}</>;
};
