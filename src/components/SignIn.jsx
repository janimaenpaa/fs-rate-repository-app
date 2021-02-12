import React from "react";
import { useHistory } from "react-router-native";
import * as yup from "yup";
import { Formik } from "formik";
import { View } from "react-native";
import SignInForm from "./SignInForm";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { accessToken } = await signIn({ username, password });
      if (accessToken) history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
