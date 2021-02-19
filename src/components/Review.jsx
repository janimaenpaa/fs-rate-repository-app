import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import ReviewForm from "./ReviewForm";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useHistory } from "react-router-native";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup.number().min(0).max(100).required("Rating is required"),
});

const ReviewContainer = ({ onSubmit }) => (
  <View>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  </View>
);

const Review = () => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;

    console.log({ values });

    try {
      const { data, error } = await createReview({
        variables: {
          repositoryName,
          ownerName,
          rating: parseInt(rating),
          text,
        },
      });

      console.log(error);

      if (error) console.log(error);

      console.log(data);
      history.push(`/${data.createReview.repositoryId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return <ReviewContainer onSubmit={onSubmit} />;
};

export default Review;
