import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";

import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: "white",
    textAlign: "center",
    padding: 10,
    borderRadius: 4,
    fontWeight: "bold",
    marginTop: 6,
  },
  input: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    color: theme.colors.textPrimary,
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
});

const SignInForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <FormikTextInput
      name="username"
      placeholder="Username"
      style={styles.input}
      testID="username"
    />
    <FormikTextInput
      name="password"
      placeholder="Password"
      style={styles.input}
      testID="password"
      secureTextEntry
    />
    <TouchableWithoutFeedback onPress={onSubmit} testID="submitButton">
      <Text style={styles.button}>Sign in</Text>
    </TouchableWithoutFeedback>
  </View>
);

export default SignInForm;
