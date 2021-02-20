import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.input}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />
      <FormikTextInput
        name="confirmPassword"
        placeholder="Password confirmation"
        style={styles.input}
        secureTextEntry
      />
      <TouchableWithoutFeedback onPress={onSubmit} testID="submitButton">
        <Text style={styles.button}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

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
export default SignUpForm;
