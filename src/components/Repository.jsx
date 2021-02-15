import React from "react";
import { useParams } from "react-router-native";
import { TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import * as Linking from "expo-linking";
import { GET_REPOSITORY } from "../graphql/queries";

import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import theme from "../theme";

const Repository = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Text>Loading...</Text>;

  console.log(data);

  return (
    <RepositoryItem {...data.repository}>
      <TouchableOpacity onPress={() => Linking.openURL(data.repository.url)}>
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

export default Repository;
