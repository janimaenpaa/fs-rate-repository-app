import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppTab from "./AppTab";

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppTab text="Repositories" url="/" />
        <AppTab text="Signin" url="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
