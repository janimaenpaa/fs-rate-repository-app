import React from "react";
import { Formik } from "formik";
import { View } from "react-native";
import SignInForm from "./SignInForm";

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    const { username, password } = values;
    console.log({ username, password });
  };
  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
