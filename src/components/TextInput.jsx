/* eslint-disable no-unused-vars */
import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  if (error) {
    return (
      <NativeTextInput
        style={[textInputStyle, { borderColor: "#d73a4a" }]}
        {...props}
      />
    );
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
