import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import Constants from "expo-constants";
import AppTab from "./AppTab";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#24292e",
    opacity: 0.9,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  text: {
    color: "#fff",
  },
  // ...
});

const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const accessToken = authStorage.getAccessToken();

  let authorizedUser = null;

  if (accessToken) {
    const { data } = useQuery(GET_AUTHORIZED_USER, {
      fetchPolicy: "cache-and-network",
    });

    if (data) {
      data.authorizedUser
        ? (authorizedUser = data.authorizedUser)
        : (authorizedUser = null);
    }
  }

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppTab text="Repositories" url="/" />
        {authorizedUser ? (
          <React.Fragment>
            <AppTab text="Create a review" url="/review" />
            <AppTab text="Sign out" url="/" onPress={signOut} />
          </React.Fragment>
        ) : (
          <AppTab text="Sign in" url="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
