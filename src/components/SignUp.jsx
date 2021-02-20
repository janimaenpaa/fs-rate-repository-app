import { useMutation } from "@apollo/react-hooks";
import { Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-native";
import * as yup from "yup";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "../hooks/useSignIn";
import SignUpForm from "./SignUpForm";

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords should match")
    .required("Password confirmation is required"),
});

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(values);

    try {
      const { data, error } = await createUser({
        variables: { username, password },
      });

      if (error) console.log(error);

      console.log(data);

      try {
        const { accessToken } = await signIn({ username, password });
        if (accessToken) history.push("/");
      } catch (e) {
        console.log(e);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
