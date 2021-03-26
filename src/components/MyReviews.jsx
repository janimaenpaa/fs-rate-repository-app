import React from "react";
import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";
import { GET_AUTHORIZED_USER } from "../graphql/queries";
import ReviewItem from "./ReviewItem";
import Text from "./Text";

const MyReviews = () => {
  const { data, loading } = useQuery(GET_AUTHORIZED_USER, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Text>Loading...</Text>;

  const reviews = data.authorizedUser
    ? data.authorizedUser.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default MyReviews;
