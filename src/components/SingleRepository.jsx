import React from "react";
import { useParams } from "react-router-native";
import { FlatList, TouchableOpacity} from "react-native";
import { useQuery } from "@apollo/react-hooks";
import * as Linking from "expo-linking";
import { GET_REPOSITORY } from "../graphql/queries";

import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import theme from "../theme";
import ReviewItem from "./ReviewItem";

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
