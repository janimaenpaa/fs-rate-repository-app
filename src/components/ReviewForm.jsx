import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
        style={styles.input}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        style={styles.input}
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        style={styles.input}
      />
      <FormikTextInput
        name="text"
        placeholder="Review"
        style={styles.input}
        multiline
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.button}>Create a review</Text>
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

export default ReviewForm;
