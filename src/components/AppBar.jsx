import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";

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
      <TouchableWithoutFeedback>
        <Text fontWeight="bold" style={styles.text}>
          Repositories
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;
