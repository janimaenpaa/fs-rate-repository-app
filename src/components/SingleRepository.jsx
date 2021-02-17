import React from "react";
import { useParams } from "react-router-native";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import * as Linking from "expo-linking";
import { format } from "date-fns";
import { GET_REPOSITORY } from "../graphql/queries";

import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import theme from "../theme";

const RepositoryInfo = ({ repository }) => {
  return (
    <RepositoryItem {...repository}>
      <TouchableOpacity onPress={() => Linking.openURL(repository.url)}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            backgroundColor: theme.colors.primary,
            padding: 10,
            marginTop: 10,
            borderRadius: 6,
            textAlign: "center",
          }}
        >
          Open in GitHub
        </Text>
      </TouchableOpacity>
    </RepositoryItem>
  );
};

const ReviewItem = ({ review }) => {
  console.log(review);
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 10,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          width: 50,
          borderRadius: 50 / 2,
          borderWidth: 2,
          borderColor: theme.colors.primary,
        }}
      >
        <Text color="primary" fontWeight="bold">
          {review.rating}
        </Text>
      </View>
      <View style={{ width: "80%", marginLeft: 10 }}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text color="textSecondary">
          {format(new Date(review.createdAt), "dd.MM.yyyy")}
        </Text>
        <Text style={{ marginTop: 10 }}>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Text>Loading...</Text>;

  const repository = data.repository;

  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  console.log(reviews);
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default SingleRepository;
