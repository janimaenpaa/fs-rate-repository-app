import { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useApolloClient } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({ variables: { username, password } });
      console.log(data.authorize);
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
      return data.authorize;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return [signIn, result];
};

export default useSignIn;
